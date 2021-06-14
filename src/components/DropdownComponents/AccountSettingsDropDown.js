import React from "react";
import useDetectClickOutsideTarget from "../../hooks/useDetectClickOutsideTarget";
import {ReactComponent as HouseIcon} from "../../assets/img/house.svg";
import {ReRoute} from "../CommonComponents/index";

function AccountSettingsDropDown() {
  const { showActive, setActive, innerRef } = useDetectClickOutsideTarget();
  return (
    <div className="account-setting-dropdown" ref={innerRef}>
      <div className="name-symbol" onClick={() => setActive(!showActive)}>
        <h4>O</h4>
      </div>
      <div
        className={`name-dropdown
        ${showActive && "show-name-dropdown"}`}
      >
        <ul>
          <ReRoute to={"/profile"}>
            <div className="name-dropdown-icon">
              <HouseIcon />
            </div>
            <span>Switch to tenant</span>
          </ReRoute>
          <ReRoute to={"/profile"}>
            <div className="name-dropdown-icon">
              <HouseIcon />
            </div>
            <span>Account Settings</span>
          </ReRoute>
          <ReRoute to={"/profile"}>
            <div className="name-dropdown-icon">
              <HouseIcon />
            </div>
            <span>Help</span>
          </ReRoute>
          <ReRoute to={"/logout"}>
            <div className="name-dropdown-icon">
              <HouseIcon />
            </div>
            <span>Logout</span>
          </ReRoute>
        </ul>
      </div>
    </div>
  );
}

export default AccountSettingsDropDown;
