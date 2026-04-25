import { useState, useEffect } from "react";
import { CDN_URL, MENU_API } from "../utils/constants";
import {useParams} from 'react-router-dom';
import ShimmerUI from "./ShimmerUI";


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
//   console.log(params);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
   
      const data = await fetch(MENU_API+resId);
      const json=await data.json();
      // console.log(json);
      setResInfo(json.data);
    
  };

  if (resInfo === null) return <ShimmerUI />;
  console.log(resInfo);

  const info = resInfo?.cards[2]?.card?.card?.info || {};
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwoMessage } =
    info;
  const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join()} - {costForTwoMessage}
      </h3>
      <h3>{CDN_URL + cloudinaryImageId}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item)=>(
            <li>{item.card.info.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
