import restaurantList from '../utils/MockData';
import RestaurantCard from './RestaurantCard';
const Body = () => {
  return (
    <div className="container">
      {restaurantList.map((restaurant, key) => (
        <RestaurantCard resData={restaurant} key={restaurant.data.id} />
      ))}
    </div>
  );
};

export default Body;
