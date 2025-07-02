import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/Zayaka-junction.png";
import "./main.css";
import "./cart.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Zayaka logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const resList = [
  {
    id:1,
    image:
      "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
    title: "Zayka Mahal ",
    rating: "4.7",
    location: "Alpha 2,Greater Noida, India",
  },
  {
    id:2,
    image:
      "https://b.zmtcdn.com/data/pictures/4/209654/7bf8c7d5947e6f8586148a5a426b0168.jpg",
    title: "Rasoi Ghar ",
    rating: "4.9",
    location: "Beta 2,Greater Noida, India",
  },
  {
    id:3,
    image:
      "https://b.zmtcdn.com/data/pictures/4/21582384/ff83746dc1ace604e0b09db310e5a39f_featured_v2.jpg",
    title: "Khaati Peeti Rasoi ",
    rating: "4.7",
    location: "Gamma 2,Greater Noida, India",
  },
  {
    id:4,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/9fc1e9ebc45d764068261af568e3be14",
    title: "Desi Thali Junction ",
    rating: "4.6",
    location: "Zeta 1,Greater Noida, India",
  },
  {
    id:5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVXawkm-7E23rYbf4zwzdDjxhi1AId2W_Zg&s",
    title: "Shudh Shakahari ",
    rating: "4.8",
    location: "Delta 1,Greater Noida, India",
  },
];

const RestaurentCart = ({ resData }) => {
  const { image, title, rating, location } = resData;

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-info">
          <span className="card-rating">⭐ {rating}</span>
          <span className="card-location">📍 {location}</span>
        </div>
      </div>
    </div>
  );
};

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppLayout />
  </>
);
