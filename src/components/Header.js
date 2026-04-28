import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState(false);
  const onlineStatus=useOnlineStatus();
  return (
    <div className="header flex justify-between items-center shadow-sm">
      <div className="logo-container w-36">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="p-4 m-4 flex gap-5"> 
          <li>
            Online Status: {onlineStatus ? '✅' : '❌' }
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button
              className="login-logout"
              onClick={() => {
                setBtnName(!btnName);
              }}
            >
              {btnName ? "Log Out" : "Log In"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
