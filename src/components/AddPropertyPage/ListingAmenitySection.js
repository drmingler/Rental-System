import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { ReactComponent as AlertCircle } from "../../assets/img/alert-circle.svg";
import { ListingIconContainer, ListingImageInstructions } from "./index";

const ListingAmenitySection = () => {
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
                  <div className="listing-icon warning">
                    <div className="svg-icon">
                      <AlertCircle />
                    </div>
                    <span>Mark what your place offers</span>
                  </div>
                </Col>
              </Row>
              <ul className="row">
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer icon={<AlertCircle />} text={"Pool"} />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Garden"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Elevator"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Doorman"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer icon={<AlertCircle />} text={"Deck"} />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Washer/Dryer In Unit"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer icon={<AlertCircle />} text={"Gym"} />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Parking Spot"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Fireplace"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Air Conditioning"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Dishwasher"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Storage"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Wheelchair Accessible"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Hardwood Floors"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Balcony"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Furnished"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer icon={<AlertCircle />} text={"View"} />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"High Rise"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Student Friendly"}
                  />
                </li>
                <li className="col-6 listing-amenities-icon">
                  <ListingIconContainer
                    icon={<AlertCircle />}
                    text={"Utilities Included"}
                  />
                </li>
              </ul>
            </Col>
            <ListingImageInstructions offset={0}>
              Check all amenities that your property has. Tenants like to know
              what your place offers.
            </ListingImageInstructions>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default ListingAmenitySection;
