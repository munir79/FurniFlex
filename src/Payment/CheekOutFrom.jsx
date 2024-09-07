import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseCarts from "../Hooks/UseCarts";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";


const CheekOutFrom = () => {
  
    const stripe = useStripe();
    const elements = useElements();
    const {user}=useContext(AuthContext);
    const AxiosSecure=UseAxiosSecure();
    const [refetch, cart]=UseCarts();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')
     const totalPrice = (cart && cart.length > 0) ? cart.reduce((total, item) => total + item.off_price, 0) : 0;

    console.log("payment", totalPrice);

 

    useEffect(() => {
        if (totalPrice > 0) {
           AxiosSecure.post('/payment-intent', { off_price: totalPrice })
                .then(res => {
                    if (res.data.clientSecret) {
                        setClientSecret(res.data.clientSecret);
                    } else {
                        console.error("No clientSecret received from backend");
                    }
                })
                .catch(error => {
                    console.error("Error in fetching clientSecret: ", error);
                });
        }
    }, [AxiosSecure, totalPrice]);
    


    const handleCheekOut= async(event)=>{
        event.preventDefault();
        // if (!stripe || !elements) {
        //     return
        // }


        if (!stripe || !elements || !clientSecret) {
            setError("Stripe or clientSecret is not available");
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        //confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }

        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                console.log(payment);

                const res = await AxiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the taka paisa",
                        showConfirmButton: false,
                        timer: 1500
                    });
                   
                }

            }
        }

    }
    return (
       <form onSubmit={handleCheekOut} >
        
        <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
             <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret} >
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}

       </form>
    );
};

export default CheekOutFrom;