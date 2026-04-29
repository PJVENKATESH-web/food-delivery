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
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    // );
    const data=await fetch('https://namastedev.com/api/v1/listRestaurants');
    const json = await data.json();
    // console.log(data);
    // const restaurants=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    const restaurantsList =
      json?.data?.data?.cards?.find(
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
      <div className="filter flex p-4">
        <div className="search mx-4">
          <input
            type="text"
            className="search-box px-4 py-2 border rounded-l-lg w-80 border-gray-400"
            placeholder="Search Restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button px-4 py-2 border rounded-r-lg border-gray-300 cursor-pointer bg-green-400"
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
          className="topRatedRestaurants px-4 py-2 rounded-lg cursor-pointer bg-green-400 border border-gray-300 "
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
          className="px-4 py-2 mx-4 w-24 rounded-lg border cursor-pointer border-gray-500 bg-green-400"
          onClick={() => {
            //to reset the listOfRestaurants
            setFilteredRestaurants(listOfRestaurants);
          }}
        >
          Reset
        </button>
      </div>
      <div className="restaurant-container flex flex-wrap gap-4 mx-14">
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
