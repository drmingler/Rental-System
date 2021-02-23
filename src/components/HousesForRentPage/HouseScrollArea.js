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
import { ReactComponent as ChevronLeft } from "../../assets/img/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../../assets/img/chevron-right.svg";
import CircularProgress from "@material-ui/core/CircularProgress";

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
              <Typography className="house-card-header">
                Common Baker
              </Typography>
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
                  <ListingIconContainer
                    icon={<SqrtIcon />}
                    text={"1000 Sq Ft"}
                  />
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
    </Col>
  );
};
function Loading() {
  return (
    <Col xl={12} className="loading">
      <Row className="justify-content-center">
        <CircularProgress className="colour" />
      </Row>
    </Col>
  );
}

function PageControls() {
  return (
    <Col sm={12} className="page-control">
      <Row>
        <div className="prev-button px-3">
          <button className="page-control-btn">
            <ChevronLeft />
            <span>Previous</span>
          </button>
        </div>
        <div className="next-button px-3">
          <button className="page-control-btn">
            <span>Next</span>
            <ChevronRight />
          </button>
        </div>
      </Row>
    </Col>
  );
}

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
      <PageControls />
    </Row>
  );
};
export default HouseScrollArea;
