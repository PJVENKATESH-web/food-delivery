import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //State Variable - Super Powerful Variable  - Hook - useState
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const onlineStatus = useOnlineStatus();
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    console.log(data);
    // const restaurants=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    const restaurantsList =
      json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setFilteredRestaurants(restaurantsList);
    setListOfRestaurants(restaurantsList);
  };
  
  if (listOfRestaurants.length === 0) return <ShimmerUI />;
  

  if (onlineStatus === false)
    return <h1>Looks like you're offline!! please check your intenret</h1>;
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="topRatedRestaurants"
          onClick={() => {
            //filter logic here
            const filteredRestaurants = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4,
            );
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
        >
          Reset
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="restaurant-link"
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard className="restaurant-card" resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
