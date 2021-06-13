import React from "react";
import {addComma} from "../../helpers/utils";

const HousePrice = ({price}) => {
    return (
        <div className="house-price">
            <span className="price-text">{`₦${price && addComma(price)}`}</span>
        </div>
    );
};
export default HousePrice;
