import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName,setBtnName]=useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          
          <button className="login-logout" onClick={()=>{setBtnName(!btnName)}}>
            {btnName ? 'Log Out':'Log In'}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;