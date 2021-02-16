import React from "react";
import { Col, Row } from "react-bootstrap";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Berlin from "../../assets/img/Berlin.webp";
import Card from "@material-ui/core/Card";
import { ListingIconContainer } from "../AddPropertyPage";
import { ReactComponent as BedIcon } from "../../assets/img/beds-icon.svg";
import { ReactComponent as BathIcon } from "../../assets/img/bath-icon.svg";
import { ReactComponent as SqrtIcon } from "../../assets/img/sqft-icon.svg";

const HouseCards = ({ image }) => {
  return (
    <Col lg={12} xl={6}>
      <Card className="house-cards">
        <div className="house-price">
          <span className="price-text">$2,300</span>
        </div>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className="house-card-header">Common Baker</Typography>
            <Typography className="house-card-text">
              Lizards are a widespread group of squamate
            </Typography>
            <div className="house-card-footer">
              <div className="house-card-icon-container">
                <ListingIconContainer icon={<BedIcon />} text={"5 Bed"} />
              </div>
              <div className="house-card-icon-container">
                <ListingIconContainer icon={<BathIcon />} text={"5 Bath"} />
              </div>
              <div className="house-card-icon-container">
                <ListingIconContainer icon={<SqrtIcon />} text={"1000 Sq Ft"} />
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Col>
  );
};

const HouseScrollArea = () => {
  return (
    <Row className="house-scroll-area">
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
      <HouseCards image={Berlin} />
    </Row>
  );
};
export default HouseScrollArea;