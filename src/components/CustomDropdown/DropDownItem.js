import React from "react";

function DropdownItem(props) {
    return (
        <div className="dropdown-item-container">
            <div className="dropdown-item-icon">{props.icon}</div>
            <div>{props.children}</div>
        </div>
    );
}

export default DropdownItem;
