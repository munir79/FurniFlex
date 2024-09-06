
import { useContext } from 'react';
import '../../Style/chairCard.css'
import { FaEuroSign } from "react-icons/fa";
import { TbShoppingBag } from "react-icons/tb";
import { AuthContext } from '../../Context/AuthProvider';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const ChairCard = ({chair}) => {
    const {_id,logo,chair_name,real_price,off_price,dicount,chair_categories,chair_description}=chair;

    const navigate=useNavigate();
const {user}=useContext(AuthContext);

const AxiosSecure=UseAxiosSecure();


const handleAddToCart=(chair)=>{
console.log(chair);
if(user && user.email){
  const Order={
    menuId:_id,
    logo,
    chair_name,
    real_price,
    off_price,
    dicount,chair_categories,
    chair_description
  }

  AxiosSecure.post('/carts',Order)
  .then(res=>{
    console.log(res.data);
    if(res.data.insertedId ){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Order Sucessfully",
        showConfirmButton: false,
        timer: 1500
      });
     
    }
  })
}


else{
  Swal.fire({
    title: "you are not log in",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "login"
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/login');
      // Swal.fire({
      //   title: "Deleted!",
      //   text: "Your file has been deleted.",
      //   icon: "success"
      // });
    }
  });
}

}


    return (
//         <div className="card bg-base-100 w-96 ">
//   <figure className="px-10 pt-10">
//     <img
//       src={logo}
//       alt="Shoes"
//       className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>

<div className="card bg-base-100 w-95 ">
  <figure>
    <img
      src={logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   <div>
   <h2 className='text-[18px] font-bold'>{chair_name}</h2>
   <div className='inline-flex text-center justify-evenly gap-5 mt-5'>
    <p className='font-bold text-xl flex'> <FaEuroSign className='text-center mt-1' />{off_price} </p> <p className='line-through flex text-xl font-semibold text-[#ABABAB]'><FaEuroSign className='text-center line-through mt-1' />{real_price}</p> 
    <p className='text-[#B92E2E] text-xl font-bold'>{dicount}</p></div> 
   </div>
    <p>{chair_description}</p>

       

    <div className="card-actions ">
    <button onClick={()=>{handleAddToCart(chair)}} className="btn btn-active w-full btn-neutral"> <TbShoppingBag />Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default ChairCard;