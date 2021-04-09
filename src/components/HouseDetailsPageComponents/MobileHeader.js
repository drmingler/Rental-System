import React from "react";
import {ReactComponent as MobileLeft} from "../../assets/img/mini-gallery-left-mobile.svg";
import BedIconWhite from "../../assets/img/amenities/white-colour/bed-icon-white.svg";
import BathIconWhite from "../../assets/img/amenities/white-colour/bath-icon-white.svg";
import SqrtIconWhite from "../../assets/img/amenities/white-colour/sqrt-icon-white.svg";
import Utilities from "./Utilities";
import {useSwipeable} from "react-swipeable";

const MobileHeader = ({ sliderControls, slideImage }) => {
  const { handleChangePicture, currentIndex, setSlide } = sliderControls;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleChangePicture(-1),
    onSwipedRight: () => handleChangePicture(1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <header className="house-details-header-mobile" {...swipeHandlers}>
      <div
        style={{ backgroundImage: `url(${slideImage[currentIndex]})` }}
        className="property-img-mobile"
        onClick={() => setSlide(true)}
      />
      <div className="house-price">
        <span className="price-text">$2,300</span>
      </div>
      <div className="left-arrow" onClick={() => handleChangePicture(-1)}>
        <MobileLeft />
      </div>
      <div className="right-arrow" onClick={() => handleChangePicture(1)}>
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
