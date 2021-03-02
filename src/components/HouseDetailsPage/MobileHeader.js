import React from "react";
import HouseImage from "../../assets/img/0be3acfcb6d1bd77327fee16dbe221877d7e314a.jpg";
import { ReactComponent as MobileLeft } from "../../assets/img/mini-gallery-left-mobile.svg";
import BedIconWhite from "../../assets/img/amenities/white-colour/bed-icon-white.svg";
import BathIconWhite from "../../assets/img/amenities/white-colour/bath-icon-white.svg";
import SqrtIconWhite from "../../assets/img/amenities/white-colour/sqrt-icon-white.svg";
import Utilities from "./Utilities";

const MobileHeader = () => {
  return (
    <header className="house-details-header-mobile">
      <div
        style={{ backgroundImage: `url(${HouseImage})` }}
        className="property-img-mobile"
      />
      <div className="house-price">
        <span className="price-text">$2,300</span>
      </div>
      <div className="left-arrow">
        <MobileLeft />
      </div>
      <div className="right-arrow">
        <MobileLeft />
      </div>
      <div className="mobile-header-footer">
        <Utilities value={5} name={"Bed"} icon={BedIconWhite} />
        <Utilities value={5} name={"Bath"} icon={BathIconWhite} />
        <Utilities value={1000} name={"Sq Ft"} icon={SqrtIconWhite} />
      </div>
    </header>
  );
};
export default MobileHeader;
