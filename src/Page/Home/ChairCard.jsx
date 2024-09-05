
import '../../Style/chairCard.css'
import { FaEuroSign } from "react-icons/fa";
import { TbShoppingBag } from "react-icons/tb";
const ChairCard = ({chair}) => {
    const {logo,chair_name,real_price,off_price,dicount,chair_categories,chair_description}=chair;
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

<div className="card bg-base-100 w-96 ">
  <figure>
    <img
      src={logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   <div>
   <h2 className='text-[18px] font-bold'>{chair_name}</h2>
   <div className='inline-flex text-center justify-evenly gap-14 mt-5'>
    <p className='font-bold text-xl flex'> <FaEuroSign className='text-center mt-1' />{off_price} </p> <p className='line-through flex text-xl font-semibold text-[#ABABAB]'><FaEuroSign className='text-center line-through mt-1' />{real_price}</p> 
    <p className='text-[#B92E2E] text-xl font-bold'>{dicount}</p></div> 
   </div>
    <p>{chair_description}</p>

       

    <div className="card-actions ">
    <button className="btn btn-active w-full btn-neutral"> <TbShoppingBag />Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default ChairCard;