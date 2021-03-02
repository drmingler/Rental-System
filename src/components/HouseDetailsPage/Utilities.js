import React from "react";

const Utilities = ({ icon, value, name }) => {
    return (
        <li className="property-utility">
            <div
                className="icon-wrapper"
                style={{ backgroundImage: `url(${icon}` }}
            />
            <span className="value">{value}</span>
            <span className="name">{name}</span>
        </li>
    );
};

export default Utilities;
