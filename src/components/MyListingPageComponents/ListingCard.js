import useDetectClickOutsideTarget from "../../hooks/useDetectClickOutsideTarget";
import {getPropertyStatus, handleRedirect} from "../../helpers/utils";
import {Col} from "react-bootstrap";
import Card from "@material-ui/core/Card";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {useHistory} from "react-router-dom";

const ListingCard = ({ status, address, propertyImage, propertyId }) => {
  const { showActive, setActive, innerRef } = useDetectClickOutsideTarget();
  let history = useHistory();

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
          <MoreVertIcon />
        </div>
        <div className="house-card-dropdown">
          {showActive && (
            <Paper className="dropdown-option-container" elevation={2}>
              <ul>
                <li
                  className="dropdown-option"
                  onClick={() =>
                    handleRedirect(`/property/${propertyId}`, history)
                  }
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
export default ListingCard;
