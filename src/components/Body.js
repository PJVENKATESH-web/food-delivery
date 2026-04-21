import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  //State Variable - Super Powerful Variable  - Hook - useState
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurants,setFilteredRestaurants]=useState(resList)

  return (
    <div className="body">
      <div className="filter">
        <button
          className="topRatedRestaurants"
          onClick={() => {
            //filter logic here
            const filteredRestaurants=listOfRestaurants.filter(
                (res)=>res?.info?.avgRating > 4
            )
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="topRatedRestaurants"
          onClick={() => {
            //to reset the listOfRestaurants
            setFilteredRestaurants(listOfRestaurants);
          }}
        >Reset</button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;