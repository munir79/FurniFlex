
import '../../Style/chairCard.css'
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
   </div>
    <p>{chair_description}</p>


    <div className="card-actions ">
    <button className="btn btn-active w-full btn-neutral">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default ChairCard;