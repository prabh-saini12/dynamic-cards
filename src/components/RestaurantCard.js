import { CDN_URL } from '../utils/constant';
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="card">
      <img className="card-img" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3 className="">{name}</h3>
      <h4>{cuisines.join(' , ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
