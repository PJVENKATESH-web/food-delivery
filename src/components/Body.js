import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let listOfRestaurants=[
    {
      id: "373558",
      name: "Chaitanya Food Court - Tiffins",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/11/1327b8ed-149d-4c25-b9e7-ca2ecf88bb4f_373558.jpg",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Snacks", "Sweets"],
      avgRating: 4.4,
      veg: true,
      parentId: "453215",
      avgRatingString: "4.4",
      totalRatingsString: "23K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      }
    },
    {
      id: "373558",
      name: "Babu Rao Tiffins",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/11/1327b8ed-149d-4c25-b9e7-ca2ecf88bb4f_373558.jpg",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Tiffins", "Sweets"],
      avgRating: 3.4,
      veg: true,
      parentId: "453215",
      avgRatingString: "3.4",
      totalRatingsString: "23K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      }
    }
  ]
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="topRatedRestaurants"
          onClick={() => {
            //filter logic here
            listOfRestaurants =listOfRestaurants.filter(
                (res)=>res.avgRating > 4
            )
            console.log(listOfRestaurants)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
