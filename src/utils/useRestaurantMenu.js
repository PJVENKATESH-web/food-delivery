import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo,setResInfo]=useState(null)
  useEffect(() => {
    fetchData();
  },[resId]);
  const fetchData=async()=>{
    //  const data= await fetch(`MENU_API+${resId}`);
    const data=await fetch(`https://namastedev.com/api/v1/listRestaurantMenu/${resId}`);
     const json=await data.json();
     setResInfo(json.data);
  }
  return resInfo;
};
export default useRestaurantMenu;
