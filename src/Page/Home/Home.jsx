import { useEffect, useState } from "react";
import ChairCard from "./ChairCard";


const Home = () => {
    const [chair,setChair]=useState([]);
    useEffect(()=>{
        fetch('cahir.json')
        .then(res=>res.json())
        .then(data=>setChair(data));
    },[])
    return (
        <div className="flex">
           <div className=" w-1/4">
            <div className="dropdown dropdown-open">
  
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Rocking chair</a></li>
    <li><a>Side chair</a></li>
    <li><a>Lounge chair</a></li>
  </ul>
</div></div>


           <div className="w-3/4 grid grid-cols-1  md:grid-cols-3 gap-2">
           
             {
                chair.map(chair=><ChairCard key={chair.id} chair={chair}></ChairCard>)
             }
           </div>
        </div>
    );
};

export default Home;