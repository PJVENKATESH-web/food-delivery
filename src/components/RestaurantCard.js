import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="restaurant-logo"
      />
      <h4>{name}</h4>
      <h5>{cuisines.join()}</h5>
      <h5>{avgRating}stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla?.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
