import React from "react";
import {Col, Row} from "react-bootstrap";
import HouseImage from "../../assets/img/property-image-1.jpg";
import {ListingCard} from "./index";

const ListingsCardSection = ({ properties }) => {
  return (
    <Row className="my-listings-card-section">
      <Col md={12}>
        <h1 className="your-listings">Your Listings</h1>
      </Col>
      {properties.map(
        ({ propertyStatus, propertyAddress, id, propertyImage }) => (
          <ListingCard
            key={id}
            status={propertyStatus}
            address={propertyAddress.address}
            propertyImage={
              (propertyImage[0] && propertyImage[0].image) || HouseImage
            }
          />
        )
      )}
    </Row>
  );
};
export default ListingsCardSection;
