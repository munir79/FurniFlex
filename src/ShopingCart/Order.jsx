
import { useState } from "react";
import { FaEuroSign } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseCarts from "../Hooks/UseCarts";
const Order = ({cart}) => {

    const [,refetch]=UseCarts();
    const{chair_name,logo,off_price,_id}=cart;
    console.log(cart);
  const AxiosSecure=UseAxiosSecure();
    const [count, setCount] = useState(0);
    const handledec=()=>{
        if(count>1){
            setCount(prev=>prev-1);
        }
    }

    const handleInc=()=>{
        if(count<10){
            setCount(pre=>pre+1);
        }
    }

const handleDelete=(id)=>{
    console.log(" delete with",id);
    Swal.fire({
        title: "Are you sure to Delete this Order?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
         AxiosSecure.delete(`/carts/${id}`)
         .then(res=>{
            console.log(res);
            if(res.data.deletedCount>0){
                
                Swal.fire({
                    title: "Deleted!",
                    text: "Your order has been deleted.",
                    icon: "success"
                  });
                  refetch();
            }
         })

        }
      });
}

    return (
    
          <div className="flex border-2  justify-between">
           <div className="flex">

            <div className="mt-20">
            <div className="flex items-center justify-center ">
      <div className="bg-gray-100  rounded-lg shadow-md">
        <div className="flex justify-between items-center space-x-4">
          <button 
            className=" text-white px-4 py-2 rounded"
            onClick={handledec}
          >
           <h2 className="text-black text-xl"> -</h2>
          </button>
          <span className="text-xl font-semibold">{count}</span>
          <button 
            className="bg-white-500 text-white px-4 py-2 rounded"
            onClick={handleInc}
          >
            <h2 className="text-black text-xl">+</h2>
          </button>
        </div>
      </div>
    </div>
            </div>
           <img src={logo} alt="" />
           <h3 className="font-semibold space-x-1 text-xl"> this is order :{chair_name} </h3>
           </div>






           <div className="ml-7  flex flex-col  " >
        <div>
        <button 
         onClick={()=>handleDelete(_id)}
        
        className="btn btn-circle">
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