import React, { Fragment } from "react";
import MobileNavbar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import {
  Header,
  HouseDescriptionSection,
  HouseImagesSection,
  HouseAmenitiesSection,
  ContactLandlordSection
} from "../components/HouseDetailsPage/index";
import { Container, Row, Col } from "react-bootstrap";

const HouseDetailsPage = () => {
  return (
    <Fragment>
      <MobileNavbar />
      <NavBar fixed={true} />
      <Header />
      <HouseImagesSection />
      <HouseDescriptionSection />
      <HouseAmenitiesSection />
      <ContactLandlordSection />
      <section className="similar-properties-section">
        <Container>
          <Row>
            <Col lg={12}>
              <h1>Similar Properties Nearby</h1>
              <Row>
                <Col lg={4}></Col>
                <Col lg={4}></Col>
                <Col lg={4}></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default HouseDetailsPage;
