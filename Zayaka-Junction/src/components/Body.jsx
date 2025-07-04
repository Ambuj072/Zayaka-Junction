import RestaurentCart from "./RestaurentCart";
import "../main.css"
import resList from "../utils/cardData";


const Body = () => {
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="res-container">
        {
          //showing all the cart
           resList.map((restorent)=>(
            <RestaurentCart key={restorent.id} resData={restorent} />      
           ))

        }
       
      </div>
    </div>
  );
};

export default Body;