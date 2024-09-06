import { useEffect, useState } from "react";
import ChairCard from "./ChairCard";


const Home = () => {
    const [chair,setChair]=useState([]);
    const [filterchair,setChairFilter]=useState([]);

  
    useEffect(()=>{
        fetch('http://localhost:5000/chair')
        .then(res=>res.json())
        .then(data=> {
            setChair(data);
            setChairFilter(data);
            setTotalPages(data.totalPages);
        });
    },[])
      
   
      

    const handleFilter=filter=>{
        if(filter === 'Rocking chair'){
         const rockingChair=chair.filter(ch=>ch.chair_categories === "Rocking Chair");
         setChairFilter(rockingChair);
        }
        else if(filter==='sidechair'){
            const sidechair=chair.filter(ch=>ch.chair_categories ==='sidechair' );
            setChairFilter(sidechair);
        }
        else if(filter==='LoungeChair'){
            const sidechair=chair.filter(ch=>ch.chair_categories ==='LoungeChair' );
            setChairFilter(sidechair);
        }
    }
    
    return (
        <div className=" flex flex-col md:flex-row">
           <div className=" w-1/4">
            <div className="dropdown dropdown-open">
  
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleFilter("Rocking chair")} ><a>Rocking chair</a></li>
    <li onClick={()=>handleFilter("sidechair")}><a>Side chair</a></li>
    <li onClick={()=>handleFilter("LoungeChair")} ><a>Lounge chair</a></li>
  </ul>
</div></div>


           <div className="w-3/4 grid grid-cols-1  md:grid-cols-3 gap-1">
           
             {
                filterchair.map(chair=><ChairCard key={chair.id} chair={chair}></ChairCard>)
             }
           </div>

         
        </div>
    );
};

export default Home;





