
import { FaEuroSign } from "react-icons/fa";
const Order = ({cart}) => {
    const{chair_name,logo,off_price}=cart;
    console.log(cart);
    return (
    
          <div className="flex border-2  justify-between">
           <div className="flex">
           <img src={logo} alt="" />
           <h3 className="font-semibold space-x-1 text-xl"> this is order :{chair_name} </h3>
           </div>






           <div className="ml-7  flex flex-col  " >
        <div>
        <button className="btn btn-circle">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
        </div>

 <div className=" mt-auto ">
 <h2 className="font-semibold flex text-xl"> <FaEuroSign className="mt-1" />{off_price}</h2>
 </div>


           </div>
        </div>
     
    );
};

export default Order;