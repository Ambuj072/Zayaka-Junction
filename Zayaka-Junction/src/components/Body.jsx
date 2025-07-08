import RestaurentCart from "./RestaurentCart";
import "../main.css"
import resList from "../utils/cardData";
import { useEffect, useState } from "react";
import  ShimmerUi from "./ShimmerUi";

import "../shimmer.css";


const Body = () => {
  //for hardCoded data

  //const[listOfRestorent,SetListOfRestorent]=useState(resList);

  //for api data
  const[apiList,SetApiList]=useState([]);
  const[filterRes,SetFilterRes]=useState([]);



  useEffect(()=>{featchData()},[]);

  

  const featchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.47448&lng=77.50399&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();

  
  const restaurantDataCard = json.data.cards.find(
    (card) =>
      card?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );

  if (restaurantDataCard) {
    SetApiList(restaurantDataCard.card.card.gridElements.infoWithStyle.restaurants);
    SetFilterRes(restaurantDataCard.card.card.gridElements.infoWithStyle.restaurants);
  } else {
    console.warn("❗ Restaurant data not found in response structure");
  }
};

const[searchText,setSearchText]=useState("");
  if(apiList.length===0){

    return (
      <div className="more-shimmer">
      <ShimmerUi/>
      <ShimmerUi/>
      <ShimmerUi/>
      <ShimmerUi/>
      <ShimmerUi/>
      <ShimmerUi/>
      <ShimmerUi/>
      <ShimmerUi/>
      </div>

    )
  }
 if (filterRes.length === 0) {
  return (
    <div className="no-results">
      <h2>No restaurant found...</h2>
    </div>
  );
}
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"  value={searchText} className="input" onChange={(e)=>{setSearchText(e.target.value)}} placeholder="Search restaurants..."/>
          <button
            className="search-btn"
            onClick={() => {
            const filerRes = apiList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    SetFilterRes(filerRes);
    console.log(filerRes);
  }}
>
  Search
</button>

        </div>
        <button className=" filter-btn"
         onClick={()=>{
          let filtered=apiList.filter((res) => res.info.avgRating > 4.3)
          SetFilterRes(filtered);
          console.log(filtered)}
         }
        >
          Top Rated Restorent</button>
       </div>
      <div className="res-container">
        
        {/* {
          //showing all the cart hardcoded data
           listOfRestorent.map((restorent)=>(
            <RestaurentCart key={restorent.info.id} resData={restorent.info} />      
           ))

        } */}

        {
          filterRes.map((restorent)=>(<RestaurentCart key={restorent.info.id} resData={restorent.info}/>))
        }
        
        
       
      </div>
    </div>
  );
};

export default Body;