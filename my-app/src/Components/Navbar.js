import React, { useState } from "react";
import "../Components/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import CartLogo from "../Components/images/Cart.png";
import { Overly } from "./nav_Overly";
import Address from "../Components/images/Crosshair.png";
import Location from "../Components/images/Placeholder.png";
import Search from "../Components/images/search (1).png";
import { city } from "./listCity";




const Navbar = () => {
  const [overly, setOverly] = useState(false);
  const [isSignUp, setIsSigUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const openLoginOverly = () => {
    setOverly(true);
    setIsLogin(true);
  };
  const openSignUpOverly = () => {
    setOverly(true);
    setIsSigUp(true);
  };
  return (
    <>
      {overly && isLogin && (
        <Overly setOverly={setOverly} mode={true} setFalse={setIsLogin} />
      )}
      {overly && isSignUp && (
        <Overly setOverly={setOverly} mode={false} setFalse={setIsSigUp} />
      )}
      <div className="nav_body">
        <div className="nav_container">
          <div className="nav_content">
            <div className="nav_left">
              <div className="nav_left-logo">
                <h3>
                  <Link to="/" ><img
        src="https://www.1mg.com/images/tata_1mg_logo.svg"
        alt="TAta_img"
      /></Link>
                </h3>
              </div>
              <div className="nav_left-links">
                <div>
                  <NavLink
                    activeClassName="active"
                    className="left-link"
                    to="/"
                  >
                    MEDICINES
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    activeClassName="active"
                    className="left-link"
                    to="/Lab"
                  >
                    LAB TEST
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    activeClassName="active"
                    className="left-link"
                    to="/online-doctor-consultation"
                  >
                    CONSULT DOCTORS
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    activeClassName="active"
                    className="left-link"
                    to="/coronavirus-covid19"
                  >
                    COVID-19
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    activeClassName="active"
                    className="left-link"
                    to="/ayurveda"
                  >
                    AYURVEDA
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    activeClassName="active"
                    className="left-link"
                    to="/subscriptions"
                  >
                    CARE PLAN
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="nav_right">
              <div className="nav_right-links">
                <div className="nav_right-links_auth">
                  <div
                    className="nav_right-links_auth__login"
                    onClick={openLoginOverly}
                  >
                    Login
                  </div>
                  <div
                    className="nav_right-links_auth__signup"
                    onClick={openSignUpOverly}
                  >
                    Sign Up
                  </div>
                </div>
                <div className="nav_right-links_offers">
                  <NavLink className="right-link" to="/offers">
                    Offers
                  </NavLink>
                </div>
                <div className="nav_right-links_cart">
                  <NavLink to="/cart">
                    <img src={CartLogo} style={{ width: "24px" }} alt="" />
                  </NavLink>
                </div>
                <div className="nav_right-links_cart">
                  <NavLink className="right-link" to="/need_help ?">
                    Need Help?
                  </NavLink>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
      

      <div className="nav_search">
        <div className="nav_search_container">
          <div className="nav_search_container-left">
            <div className="nav_search_container-left_input-location_container">
              <div
                className="input-location_container-location-icon"
                style={{ paddingTop: "5px" }}
              >
                <img src={Location} alt="img" />
              </div>
              <input
                className="input-location_container-location-input"
                placeholder="Enter Your City"
                onClick={() => {
                  setShowDropDown(!showDropDown);
                }}

              ></input>
              <div
                className="input-location_container-location-address-icon"
                style={{ paddingTop: "5px"}}
              >
                <img src={Address} alt="img"  style={{cursor:"pointer"}}/>
              </div>

              {showDropDown && (
                <div className="input-location_container-location-address-dropdown">
                  {city.map((city) => {
                    return city === "TOP CITIES" || city === "ALL CITIES" ? (
                      <div className="list-div-all">
                        <p className="list-para-all">{city}</p>
                      </div>
                    ) : (
                      <div className="list-div">
                        <p className="list-para">{city}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="nav_search_container-left_input-item_container">
              <input                 
                className="nav_search_container-left_input-item_container-input"
                placeholder="Search for Medicines and Health Products">

                </input>
              <img src={Search} alt="" style={{cursor:"pointer"}}/>
            </div>
          </div>

          <div className="nav_search_container-right">
            <button className="nav_search_container-right__button">Quick Order</button>
          </div>
        </div>
      </div>

      <div className="nav_dropdown_body">
        <div className="nav_dropdown_body_container">
          
        </div>
      </div>
    </>
  );
};

export default Navbar;