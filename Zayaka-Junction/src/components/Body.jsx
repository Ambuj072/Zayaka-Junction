import RestaurentCart from "./RestaurentCart";
import "../main.css"
import resList from "../utils/cardData";
import { useState } from "react";



const Body = () => {
  const[listOfRestorent,SetListOfRestorent]=useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className=" filter-btn"
         onClick={()=>{
          let filtered=listOfRestorent.filter((res) => res.rating > 4.5)
          SetListOfRestorent(filtered);
          console.log(filtered)}
         }
        >
          Top Rated Restorent</button>
       </div>
      <div className="res-container">
        {
          //showing all the cart
           listOfRestorent.map((restorent)=>(
            <RestaurentCart key={restorent.id} resData={restorent} />      
           ))

        }
       
      </div>
    </div>
  );
};

export default Body;