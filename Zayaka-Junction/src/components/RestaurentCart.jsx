import "../cart.css"


const RestaurentCart = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, locality,areaName } = resData;
  const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

  // const imgSrc = cloudinaryImageId
  // ? CDN_URL + cloudinaryImageId
  // : image;
    
  return (
    <div className="card">
      <img src={cloudinaryImageId}  className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-info">
          <span className="card-rating">⭐ {avgRating}</span>
          <span className="card-location">📍 {locality+","+ areaName}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCart;