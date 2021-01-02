import React from "react";
import { ReactComponent as MenuIcon } from "../assets/align-justify.svg";
import { ReactComponent as CancelIcon } from "../assets/x.svg";
import {
  MobileLearnMore,
  MobileAccountSettings,
  MobileProducts
} from "./MobileDropDown/index";
import useToggle from "../hooks/useToggle";

const MobileNavbar = () => {
  const { showActive, setActive } = useToggle();

  return (
    <div className="navbar-mobile-container">
      <header className="mobile-navbar">
        <h4>Logo</h4>
        <div className="mobile-menu-icons">
          {!showActive && (
            <div onClick={() => setActive(true)}>
              <MenuIcon />
            </div>
          )}
          {showActive && (
            <div onClick={() => setActive(!showActive)}>
              <CancelIcon />
            </div>
          )}
        </div>
      </header>
      <div
        className={`mobile-navbar-content 
        ${showActive && "show-mobile-dropdown"}`}
      >
        <ul>
          <MobileAccountSettings />
          <li>
            <a href="/">Listing a property</a>
          </li>
          <li>
            <a href="/">Properties</a>
          </li>
          <MobileProducts />
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Messages</a>
          </li>
          <MobileLearnMore />
          <li>
            <a href="/">Account Settings</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
