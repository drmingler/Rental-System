import React from "react";
import { ReactComponent as ChevronUp } from "../../assets/chevron-up.svg";
import { ReactComponent as ChevronDown } from "../../assets/chevron-down.svg";
import useDropDown from "../../hooks/useDropDown";

function MenuOptionsDropDown({ menuOption, children }) {
  const { showActive, setActive, innerRef } = useDropDown();
  return (
    <li ref={innerRef} className="nav-item-dropdown">
      <div onClick={() => setActive(!showActive)}>
        <span className="nav-option">{menuOption}</span>
        {showActive && (
          <span className="chevron-icon">
            <ChevronDown />
          </span>
        )}
        {!showActive && (
          <span className="chevron-icon">
            <ChevronUp />
          </span>
        )}
      </div>
      <div
        className={`dropdown-container
        ${showActive && "show-dropdown-container"}`}
      >
        {children}
      </div>
    </li>
  );
}

export default MenuOptionsDropDown;
