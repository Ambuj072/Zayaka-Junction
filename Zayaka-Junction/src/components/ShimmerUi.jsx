
import "../shimmer.css"; 

const ShimmerCard = () => {
  return (
    <div className="card shimmer-card">
      <div className="shimmer-img shimmer"></div>
      <div className="card-body">
        <div className="shimmer-title shimmer"></div>
        <div className="card-info">
          <div className="shimmer-rating shimmer"></div>
          <div className="shimmer-location shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
