import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  //State Variable - Super Powerful Variable  - Hook - useState
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurants,setFilteredRestaurants]=useState(resList)
  useEffect(()=>{
    fetchData()
  },[]);
  const fetchData=async()=>{
    const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json=await data.json();
    console.log(json);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
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