import React, { useContext } from "react";
import { ReactComponent as ChevronDown } from "../../assets/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../../assets/chevron-up.svg";
import { MobileDropDownContext } from "./MobileDropDownWrapper";

const MobileDropDownHeader = props => {
  const { showActive, setActive }  = useContext(MobileDropDownContext);
  return (
    <li
      className="mobile-menu-item-container"
      onClick={() => setActive(!showActive)}
    >
      <div className="mobile-menu-item-header">
        {props.children}
        {!showActive && <ChevronDown />}
        {showActive && <ChevronUp />}
      </div>
    </li>
  );
};

export default MobileDropDownHeader;
