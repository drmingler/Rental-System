import React from "react";

const RentingHeader = ({smallImage, mediumImage, largeImage}) => {
  return (
    <picture className="header-image">
      <source media="(max-width:478px)" srcSet={smallImage} />
      <source media="(max-width:1366px)" srcSet={mediumImage} />
      <img alt="renting-bg" srcSet={largeImage} />
    </picture>
  );
};
export default RentingHeader;
