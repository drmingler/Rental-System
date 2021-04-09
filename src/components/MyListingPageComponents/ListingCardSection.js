import React from "react";
import {Col, Row} from "react-bootstrap";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Card from "@material-ui/core/Card";
import HouseImage from "../../assets/img/property-image-1.jpg";
import useDropDown from "../../hooks/useDropDown";
import Paper from "@material-ui/core/Paper";

const ListingCard = () => {
  const { showActive, setActive, innerRef } = useDropDown();
  const showDropDown = () => {
    setActive(!showActive);
  };
  return (
    <Col md={4} className="listings-card-container">
      <Card className="house-cards">
        <div className="house-price">
          <span className="price-text">$2,300</span>
        </div>
        <div className="house-menu-icon" onClick={showDropDown} ref={innerRef}>
          <MoreVertIcon />
        </div>
        <div className="house-card-dropdown">
          {showActive && (
            <Paper className="dropdown-option-container" elevation={2}>
              <ul>
                <li
                  className="dropdown-option"
                  // onClick={() => handleSelect("bestMatch")}
                >
                  <VisibilityIcon />
                  <span>View Listing</span>
                </li>
                <li
                  className="dropdown-option"
                  // onClick={() => handleSelect("bestMatch")}
                >
                  <EditIcon />
                  <span>Edit</span>
                </li>
                <li
                  className="dropdown-option"
                  // onClick={() => handleSelect("bestMatch")}
                >
                  <DeleteForeverIcon />
                  <span>Delete</span>
                </li>
              </ul>
            </Paper>
          )}
        </div>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={HouseImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className="house-card-header">
              Nyíregyháza, Szántó Kovács János u. 1, 4400 Hungary
            </Typography>
            <Typography className="house-card-text">
              Lizards are a widespread group of squamate
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Col>
  );
};
const ListingsCardSection = () => {
  return (
    <Row className="my-listings-card-section">
      <Col md={12}>
        <h1 className="your-listings">Your Listings</h1>
      </Col>
      <ListingCard />
      <ListingCard />
      <ListingCard />
    </Row>
  );
};
export default ListingsCardSection;
