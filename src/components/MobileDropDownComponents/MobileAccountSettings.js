import React from "react";
import {MobileDropDownHeader, MobileDropDownWrapper, MobileMenuOptionDropDown} from "./index";
import {ReactComponent as HouseIcon} from "../../assets/img/house.svg";

const MobileAccountSettings = () => {
  return (
      <MobileDropDownWrapper>
        <MobileDropDownHeader>
          <div className="mobile-menu-name-choice">
            <div className="name-symbol">
              <span>O</span>
            </div>
            <span>hi,</span>
            <span>Olarewaju</span>
          </div>
        </MobileDropDownHeader>
        <MobileMenuOptionDropDown height={false}>
          <li className="mobile-menu-choice-container">
            <div>
              <HouseIcon />
            </div>
            <span>Emmanuel</span>
          </li>
          <li className="mobile-menu-choice-container">
            <div>
              <HouseIcon />
            </div>
            <span>Inbox</span>
          </li>
          <li className="mobile-menu-choice-container">
            <div>
              <HouseIcon />
            </div>
            <span>Listings</span>
          </li>
          <li className="mobile-menu-choice-container">
            <div>
              <HouseIcon />
            </div>
            <span>Account Settings</span>
          </li>
        </MobileMenuOptionDropDown>
      </MobileDropDownWrapper>
  );
};
export default MobileAccountSettings;

