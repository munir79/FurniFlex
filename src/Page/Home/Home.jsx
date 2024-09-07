import { useEffect, useState } from "react";
import ChairCard from "./ChairCard";
import '../../Style/Pagination.css'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";


const Home = () => {
    const [chair,setChair]=useState([]);
    const [filterchair,setChairFilter]=useState([]);
    const [itemsperPage,setItemPerpage]=useState(10);
    const [currentpage,setCurrentPage]=useState(0);

  
    useEffect(()=>{
        fetch(`http://localhost:5000/chair?page=${currentpage}&size=${itemsperPage}`)
        .then(res=>res.json())
        .then(data=> {
            setChair(data);
            setChairFilter(data);
            
        });
    },[currentpage,itemsperPage])
      
   
      

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

    // pagination
   
    const handleItemPerpageChange=e=>{
        
        const val=parseInt(e.target.value);
        console.log(val);
        setItemPerpage(val);
        setCurrentPage(0);
    }

    const handleprev=()=>{
        if(currentpage>0){
            setCurrentPage(currentpage-1);
        }
    }

    const handleNext=()=>{
        if(currentpage<pages.length){
            setCurrentPage(currentpage+1)
        }
    }

    // const itemperPage=10;
    const totalChair=chair.length;
    const NumberOfPage=Math.ceil(totalChair/itemsperPage);
    const pages=[...Array(NumberOfPage).keys()];
    
    return (
       <div>
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
        <h1 className="text-center"> current page :{currentpage} </h1>
      <div className=" pagination ">
          <button onClick={handleprev} > <FaAngleLeft /> </button>
        {
            pages.map(page=><button 
                
                onClick={()=>setCurrentPage(page)}
                className={ currentpage === page && 'selected' } 
                key={page}>  {page} </button>)
        }
        <button onClick={handleNext} ><FaAngleRight /></button>
        <select className="space-x-5" value={itemsperPage} onChange={handleItemPerpageChange} name="" id="" >
            <option value="1">1</option>
            <option value="2">2</option>
            
           

        </select>
      </div>
       </div>
    );
};

export default Home;





