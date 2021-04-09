import React from "react";

const HouseCardIconWrapper = ({icon, text}) => {
  return (
      <div className="house-icon-wrapper">
        <div className="svg-icon">
            {icon}
        </div>
        <span>{text}</span>
      </div>
  );
};
export default HouseCardIconWrapper;
