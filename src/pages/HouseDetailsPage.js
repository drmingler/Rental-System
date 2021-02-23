import React, { Fragment } from "react";
import MobileNavbar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import {
  Header,
  HouseDescriptionSection,
  HouseImagesSection,
  HouseAmenitiesSection
} from "../components/HouseDetailsPage/index";
import { Container, Row, Col } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import HouseImage from "../assets/img/property-image-1.jpg";

const HouseDetailsPage = () => {
  return (
    <Fragment>
      <MobileNavbar />
      <NavBar fixed={true} />
      <Header />
      <HouseImagesSection />
      <HouseDescriptionSection />
      <HouseAmenitiesSection />
      <section className="contact-landlord-section">
        <Container>
          <Row>
            <Col md={9}>
              <Row>
                <Col md={4}>
                  <Paper variant="outlined">
                    <div className="contact-agent-card">
                      <div className="landlord-image-container">
                        <img src={HouseImage} alt="landlord" />
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="landlord-short-details">
                        <h3>Stefanie</h3>
                        <span>From Berlin, Germany</span>
                      </div>
                      <button className="contact-landlord-button">
                        Contact Stefanie
                      </button>
                    </div>
                  </Paper>
                </Col>
                <Col md={8}></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default HouseDetailsPage;
