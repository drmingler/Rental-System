import React, {useState} from "react";
import {addComma, Capitalize} from "../../helpers/utils";
import Card from "@material-ui/core/Card";
import {HouseCardIconWrapper, HousePrice} from "../CommonComponents";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {BathIconWhite, BedIconWhite, SqrtIconWhite} from "../../assets/img/amenities/index";

import pointer from "../../assets/img/info-window-bottom.svg";
import useDetectClickOutsideTarget from "../../hooks/useDetectClickOutsideTarget";

const MarkerComponent = ({ property }) => {
  const { price, name, bed, bath, address, image } = property;
  const [isClicked, setClick] = useState(false);

  const { showActive, setActive, innerRef } = useDetectClickOutsideTarget();

  const handleClick = () => {
    setClick(true);
    setActive(!showActive);
  };

  return (
    <div className="marker-wrapper" ref={innerRef}>
      <div
        className={`marker ${isClicked && "marker-clicked"}`}
        onClick={handleClick}
      >
        <span>{"₦" + addComma(price)}</span>
      </div>
      {showActive && (
        <div className="map-card-wrapper">
          <Card className="map-house-cards">
            <HousePrice price={price} />
            <CardActionArea>
              <div className="map-card-image-wrapper">
                <CardMedia
                  component="img"
                  alt="property"
                  height="200"
                  image={image}
                  title="Property Card"
                />
                <div className="map-house-card-amenities">
                  <HouseCardIconWrapper
                    icon={<BedIconWhite />}
                    text={`${bed} Bed`}
                  />
                  <HouseCardIconWrapper
                    icon={<BathIconWhite />}
                    text={`${bath} Bath`}
                  />
                  <HouseCardIconWrapper
                    icon={<SqrtIconWhite />}
                    text={`${addComma(300)} Sq Ft`}
                  />
                </div>
              </div>
              <CardContent>
                <Typography className="house-card-header">
                  {Capitalize(name)}
                </Typography>
                <Typography className="house-card-text eclipse">
                  {address}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <div
            style={{ background: `url(${pointer})` }}
            className="pointer-bg-top"
          />
        </div>
      )}
    </div>
  );
};

export default MarkerComponent;
