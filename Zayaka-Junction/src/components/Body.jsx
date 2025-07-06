import RestaurentCart from "./RestaurentCart";
import "../main.css"
import resList from "../utils/cardData";
import { useEffect, useState } from "react";



const Body = () => {
  const[listOfRestorent,SetListOfRestorent]=useState(resList);

  useEffect(()=>{featchData()},[])

  const featchData= async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.47448&lng=77.50399&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    
   //fetch the data from the api
   //SetListOfRestorent(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  }
  return (
    <div className="body">
      <div className="filter">
        <button className=" filter-btn"
         onClick={()=>{
          let filtered=listOfRestorent.filter((res) => res.info.avgRating > 4.5)
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
            <RestaurentCart key={restorent.info.id} resData={restorent.info} />      
           ))

        }
       
      </div>
    </div>
  );
};

export default Body;