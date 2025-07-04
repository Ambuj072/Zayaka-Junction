import "../cart.css"


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

export default RestaurentCart;