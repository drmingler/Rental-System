import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {ReactComponent as BedIcon} from "../../assets/img/beds-icon.svg";
import {ReactComponent as BathIcon} from "../../assets/img/bath-icon.svg";
import {ReactComponent as SqrtIcon} from "../../assets/img/sqft-icon.svg";
import {HouseCardIconWrapper} from "./index";

const HouseCard = (props) => {
  const {image, propertyName, address, price, bed, bath, size} = props;
  return (
      <Card className="house-cards">
        <div className="house-price">
          <span className="price-text">{`₦${price && price.toLocaleString()}`}</span>
        </div>
        <CardActionArea>
          <CardMedia
              component="img"
              alt="property"
              height="200"
              image={image}
              title="Property Card"
          />
          <CardContent>
            <Typography className="house-card-header">{propertyName}</Typography>
            <Typography className="house-card-text eclipse">
              {address}
            </Typography>
            <div className="house-card-footer">
              <HouseCardIconWrapper icon={<BedIcon/>} text={`${bed} Bed`}/>
              <HouseCardIconWrapper icon={<BathIcon/>} text={`${bath} Bath`}/>
              <HouseCardIconWrapper icon={<SqrtIcon/>} text={`${size} Sq Ft`}/>
            </div>
          </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HouseCard;
