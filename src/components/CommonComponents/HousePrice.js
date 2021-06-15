import React from "react";

const HousePrice = ({price}) => {
    return (
        <div className="house-price">
            <span className="price-text">{`₦${price && price.toLocaleString()}`}</span>
        </div>
    );
};
export default HousePrice;
