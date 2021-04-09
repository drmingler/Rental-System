import React from "react";

const AmenitiesIconWrapper = ({ Icon, name }) => {
    return (
        <li className="col-6 listing-amenities-icon">
            <div className="amenities-icon-wrapper">
                <Icon />
                <span>{name}</span>
            </div>
        </li>
    );
};

export default AmenitiesIconWrapper;
