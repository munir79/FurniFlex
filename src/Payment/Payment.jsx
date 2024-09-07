import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheekOutFrom from "./CheekOutFrom";

const StripePromise=loadStripe("pk_test_51PNufw2KHGlFTrJGt4n0UpHKZvmUUHu2dGMlrQs4h1X1riE6ZOViRFR83y1yDwHLnhwiIPueDGoVxtGYxbnDB7KP00bhQSOlgz")
const Payment = () => {
  
    return (
        <div>
          <Elements stripe={StripePromise}>
            <CheekOutFrom></CheekOutFrom>
          </Elements>
        </div>
    );
};

export default Payment;