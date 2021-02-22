import React from "react";

const ListingIconContainer = ({icon, text}) => {
  return (
      <div className="listing-icon">
        <div className="svg-icon">
            {icon}
        </div>
        <span>{text}</span>
      </div>
  );
};
export default ListingIconContainer;
