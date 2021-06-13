import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {AmenitiesIconWrapper} from "../CommonComponents/index";
import {propertyAmenities} from "../../helpers/PropertyConstants";

const HouseAmenitiesSection = () => {
  return (
    <section className="listing-amenities-section">
      <div className="listing-amenities-container">
        <Container fluid="lg">
          <Row>
            <Col
              md={12}
              lg={9}
              className="listing-amenities house-amenities-section"
            >
              <Row>
                <Col md={6} lg={6}>
                  <div className="amenities-header">
                    <h1 className="section-header">Amenities</h1>
                  </div>
                </Col>
              </Row>
              <ul className="row">
                {propertyAmenities.map(amenity => (
                    <AmenitiesIconWrapper
                        Icon={amenity.iconGrey}
                        name={amenity.text}
                        key={amenity.key}
                    />
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default HouseAmenitiesSection;
