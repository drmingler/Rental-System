import React, { useLayoutEffect, useState } from "react";
import { ReactComponent as HouseIcon } from "../assets/house.svg";
import {
  DropdownItem,
  MenuOptionsDropDown,
  AccountSettingsDropDown
} from "./CustomDropdown/index";

function NavBar() {
  const [transparent, setTransparent] = useState("navbar-transparent");
  useLayoutEffect(() => {
    window.onscroll = () => {
      let currentPosition = window.pageYOffset;

      if (currentPosition > 100) {
        setTransparent("navbar");
      } else {
        setTransparent("navbar-transparent");
      }
    };
  }, []);

  return (
    <div className={`${transparent}`}>
      <div className="logo">
        <h3>Logo</h3>
      </div>
      <div className="nav-item-container">
        <ul className="nav-items">
          <MenuOptionsDropDown menuOption={"Properties"}>
            <h3>Rental Accommodation</h3>
            <DropdownItem icon={<HouseIcon />}>
              <h5>Find a place</h5>
              <span>How renting works on our platform</span>
            </DropdownItem>
            <DropdownItem icon={<HouseIcon />}>
              <h5>Rent out your place</h5>
              <span>How to rent your properties online</span>
            </DropdownItem>
          </MenuOptionsDropDown>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Messages</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <MenuOptionsDropDown menuOption={"Learn More"}>
            <h3>Rental Accommodation</h3>
            <DropdownItem icon={<HouseIcon />}>
              <h5>Find a place</h5>
              <span>How renting works on our platform</span>
            </DropdownItem>
            <DropdownItem icon={<HouseIcon />}>
              <h5>Rent out your place</h5>
              <span>How to rent your properties online</span>
            </DropdownItem>
          </MenuOptionsDropDown>
        </ul>
        <div className="list-property">
          <button>List a Property</button>
          <AccountSettingsDropDown />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
