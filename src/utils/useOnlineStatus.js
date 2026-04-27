import { useEffect, useState } from "react";


const useOnlineStatus =()=>{
    //to update the status-state variable is required
    const [onlineStatus,setOnlineStatus]=useState(true);
    //shows whether your internet is online or offline
    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnlineStatus(false);
        })
        window.addEventListener('online',()=>{
            setOnlineStatus(true);
        })

    },[]);
    //to send the current status
    return onlineStatus
};

export default useOnlineStatus;