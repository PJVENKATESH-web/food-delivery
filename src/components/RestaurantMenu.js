import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //   console.log(params);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUI />;
  // console.log(resInfo);

  const info = resInfo?.cards[2]?.card?.card?.info || {};
  // const { name, cuisines, avgRating, cloudinaryImageId, costForTwoMessage } =info;
  const {
    name,
    cuisines,
    avgRating,
    imageId,
    cloudinaryImageId,
    costForTwoMessage,
    sla,
    totalRatingsString
  } = info;
  // const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  const regularCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const itemCards =
    regularCards.find((card) => card?.card?.card?.itemCards)?.card?.card
      ?.itemCards || [];
  // console.log({ itemCards });

  return (
    <div className="restaurant-menu mx-24 my-12">
      <div className="flex justify-between border-b-gray-100 py-4 px-2 ">
        <div className="">
          <h1 className="font-bold text-3xl">{name}</h1>
          <h3 className="font-semibold text-green-400">
            {cuisines.join(", ")} - {costForTwoMessage}
          </h3>
          <p className="text-xs font-semibold text-red-700">{sla.slaString} - {totalRatingsString}</p>
        </div>
        <div>
          {/* <h3>{CDN_URL + cloudinaryImageId}</h3> */}
          {(imageId || cloudinaryImageId) && (
            <img className="object-cover w-20"
            src={CDN_URL + (imageId || cloudinaryImageId)} alt={name} />
          )}
        </div>
      </div>

      <div  className="p-5" >
        <h2 className="text-center font-bold text-2xl">Menu</h2>
        {itemCards.map((item) => (
            <div className='flex m-2 p-2 border-b border-gray-200 justify-between' key={item.card.info.id}>
              <div>
                <h4 className="text-orange-400 font-semibold">{item.card.info.name}</h4>
                <p className="text-sm">{item.card.info.description}</p>
                <p>Price: {(item.card.info.price || item.card.info.defaultPrice)/100}</p>
              </div>
              <div>
                <img className="w-18"
                src={CDN_URL + (imageId||cloudinaryImageId)} alt='item' />
              </div>
            </div>       
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
