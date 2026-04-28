import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className=" m-2 w-60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer hover-95">
      <img
        className="w-full h-40 object-cover"
        src={CDN_URL +cloudinaryImageId}
        alt="restaurant-logo"
      />
      <div className='p-3 space-y-1'>
         <h4 className='font-bold text-lg truncate'>{name}</h4>
         <p className='text-sm text-gray-500 truncate'>{cuisines.join(", ")}</p>
         <div className='flex justify-between items-center text-sm mt-2'>
           <span className='bg-green-600 text-white px-2 py-1 rounded-md text-xs font-semibold'>⭐ {avgRating}</span>
           <span className='text-black-600'>{sla?.deliveryTime} min</span>
         </div>
    
         <p className='text-sm py-2 text-gray-700'>{costForTwo} minutes</p>
      </div>
    </div>
  )
};

export default RestaurantCard;
