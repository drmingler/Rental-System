import {Col, Container, Row} from "react-bootstrap";
import React, {useState} from "react";
import {ReactComponent as AlertCircle} from "../../assets/img/alert-circle.svg";
import {ListingAmenitiesIconWrapper, ListingInstructions} from "./index";
import {propertyAmenities} from "../../constants/PropertyConstants";

const ListingAmenitySection = () => {
  const [houseAmenities, selectHouseAmenity] = useState({});
  return (
    <section className="listing-amenities-section">
      <div className="listing-amenities-container">
        <Container fluid="lg">
          <Row>
            <Col md={9} className="listing-amenities">
              <Row>
                <Col md={6} lg={6}>
                  <div className="amenities-header">
                    <h1 className="section-header">Amenities</h1>
                  </div>
                </Col>
                <Col
                  md={6}
                  lg={{ span: 5, offset: 1 }}
                  className="listing-icon-container"
                >
                  <div className="amenities-instruction">
                    <div className="svg-icon">
                      <AlertCircle/>
                    </div>
                    <span>Mark what your place offers</span>
                  </div>
                </Col>
              </Row>
              <ul className="row">
                {propertyAmenities.map(amenity => (
                    <ListingAmenitiesIconWrapper
                        houseAmenities={houseAmenities}
                        selectHouseAmenity={selectHouseAmenity}
                        InactiveIcon={amenity.iconLight}
                        ActiveIcon={amenity.iconPurple}
                        text={amenity.text}
                        key={amenity.key}
                        customKey={amenity.key}
                        value={amenity.value}
                    />
                ))}
              </ul>
            </Col>
            <ListingInstructions offset={0} InstructionKey={"instruction4"}>
              Check all amenities that your property has. Tenants like to know
              what your place offers.
            </ListingInstructions>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default ListingAmenitySection;
