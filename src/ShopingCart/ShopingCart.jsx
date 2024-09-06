import UseCarts from "../Hooks/UseCarts";
import Order from "./Order";


const ShopingCart = () => {
    const [cart]=UseCarts();
    console.log(cart);
    return (
        <div className="flex gap-10 ">

          <div className="w-2/3" >
        <h2 className="font-semibold text-2xl">An overview of your order</h2>
        <div className="mt-6">
        {
            cart.map(cart=><Order  cart={cart} key={cart._id}></Order> )
          }
        </div>
          </div>



          <div className="w-1/3 h-[375px] ">
        <h3 className="font-semibold  text-3xl"> Order Details</h3>

        <div className="border-2 mt-5 p-3 h-[213px]">
        <div className="ml-3 mt-2">
        <h3 className="text-xl">Subtotal: </h3>
        <h3 className="text-xl" >Subtotal: </h3>
        <h3 className="text-xl" >Estimated Tax: </h3>
      <div className="mt-5">
      <h4 className="text-2xl font-semibold">Total: </h4>
      </div>
        </div>
        
        </div>
           
        <button className="btn mt-4 btn-active text-xl font-medium w-full btn-neutral">Go to Checkout</button>
          </div>

        </div>
    );
};

export default ShopingCart;