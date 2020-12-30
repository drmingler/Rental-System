import React from "react";
import useDropDown from "../../hooks/useDropDown";
import { ReactComponent as HouseIcon } from "../../assets/house.svg";

function AccountSettingsDropDown() {
  const { showActive, setActive, innerRef } = useDropDown();
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
          <li>
            <div className="name-dropdown-icon">
              <HouseIcon />
            </div>
            <span>Switch to tenant</span>
          </li>
          <li>
            <div className="name-dropdown-icon">
              <HouseIcon />
            </div>
            <span>Account Settings</span>
          </li>
          <li>
            <div className="name-dropdown-icon">
              <HouseIcon />
            </div>
            <span>Help</span>
          </li>
          <li>
            <div className="name-dropdown-icon">
              <HouseIcon />
            </div>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AccountSettingsDropDown;
