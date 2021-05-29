import React from "react";
import {ReactComponent as ChevronUp} from "../../assets/img/chevron-up.svg";
import {ReactComponent as ChevronDown} from "../../assets/img/chevron-down.svg";
import useDetectClickOutsideTarget from "../../hooks/useDetectClickOutsideTarget";

function MenuOptionsDropDown({menuOption, children}) {
    const {showActive, setActive, innerRef} = useDetectClickOutsideTarget();
    return (
        <li ref={innerRef} className="nav-item-dropdown">
            <div className="nav-option" onClick={() => setActive(!showActive)}>
                <span className="nav-name">{menuOption}</span>
                <span
                    className={`chevron-icon ${!showActive && "chevron-icon-active"}`}
        >
          <ChevronDown />
        </span>
        <span className={`chevron-icon ${showActive && "chevron-icon-active"}`}>
          <ChevronUp />
        </span>
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
