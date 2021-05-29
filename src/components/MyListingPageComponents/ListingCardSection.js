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
import propertyImage1 from "../../assets/img/propertyImage1.jpeg";
import propertyImage2 from "../../assets/img/propertyImage2.jpeg";
import propertyImage3 from "../../assets/img/propertyImage3.jpeg";
import useDetectClickOutsideTarget from "../../hooks/useDetectClickOutsideTarget";
import Paper from "@material-ui/core/Paper";
import {getPropertyStatus} from "../../constants/utils";

const ListingCard = ({status, address, propertyImage}) => {
    const {showActive, setActive, innerRef} = useDetectClickOutsideTarget();

    const showDropDown = () => {
        setActive(!showActive);
    };

    let propertyStatus = getPropertyStatus(status);
    return (
        <Col md={4} className="listings-card-container">
            <Card className="house-cards">
                <div className={`house-price ${propertyStatus[0].toLowerCase()}`}>
                    <span>{propertyStatus[0]}</span>
                </div>
                <div className="house-menu-icon" onClick={showDropDown} ref={innerRef}>
                    <MoreVertIcon/>
                </div>
                <div className="house-card-dropdown">
                    {showActive && (
                        <Paper className="dropdown-option-container" elevation={2}>
                            <ul>
                                <li className="dropdown-option">
                                    <VisibilityIcon/>
                                    <span>View Listing</span>
                                </li>
                                <li
                                    className="dropdown-option"
                                    // onClick={() => handleSelect("bestMatch")}
                                >
                                    <EditIcon/>
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
                image={propertyImage}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography className="house-card-header eclipse">
                    {address}
                </Typography>
                <Typography className="house-card-text">
                    {propertyStatus[1]}
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
          <ListingCard
              status={"Verified"}
              address={
                  "28b Jaiye Oyedotun Street, Magodo Gra, Kosofe Lga, Lagos, Nigeria"
              }
              propertyImage={HouseImage}
          />
          <ListingCard
              status={"Pending"}
              address={" Km 34, Ibeju Lekki, Lagos, Nigeria"}
              propertyImage={propertyImage3}
          />
          <ListingCard
              status={"Rejected"}
              address={
                  "29a Jaiye Oyedotun Street, Magodo Gra, Kosofe Lga, Lagos, Nigeria"
              }
              propertyImage={propertyImage1}
          />
          <ListingCard
              status={"Expired"}
              address={
                  "29a Jaiye Oyedotun Street, Magodo Gra, Kosofe Lga, Lagos, Nigeria"
              }
              propertyImage={propertyImage2}
          />
      </Row>
  );
};
export default ListingsCardSection;
