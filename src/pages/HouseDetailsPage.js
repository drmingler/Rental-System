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
import { ReactComponent as UserIcon } from "../assets/img/user.svg";
import { ReactComponent as HomeIcon } from "../assets/img/home.svg";
import { ReactComponent as MailIcon } from "../assets/img/mail.svg";
import { ReactComponent as PhoneIcon } from "../assets/img/phone.svg";


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
                <Col lg={6} xl={4}>
                  <Paper variant="outlined" className="contact-landlord-card">
                    <div className="landlord-image-wrapper">
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
                    <div className="phone-and-email">
                      <div className="text-icon-wrapper">
                        <div className="icon-wrapper">
                          <PhoneIcon />
                        </div>
                        <span>
                          <strong>Phone number</strong> verified
                        </span>
                      </div>
                      <div className="text-icon-wrapper">
                        <div className="icon-wrapper">
                          <MailIcon />
                        </div>
                        <span>
                          <strong>Email</strong> verified
                        </span>
                      </div>
                    </div>
                  </Paper>
                </Col>
                <Col lg={6} xl={8}>
                  <div className="landlord-name-address">
                    <h3>Stefanie</h3>
                    <span>from Berlin, Germany</span>
                  </div>
                  <div className="short-description">
                    <span>
                      Hi I am Stefanie, property manager for room housing. Happy
                      to get in contact with you and you are welcome to live in
                      our beautiful rooms.
                    </span>
                    <div className="landlord-stats-container">
                      <div className="landlord-stats">
                        <div className="icon-wrapper">
                          <UserIcon />
                        </div>
                        <span className="date-joined">Member since</span>
                        <span>May 2019</span>
                      </div>
                      <div className="landlord-stats">
                        <div className="icon-wrapper">
                          <HomeIcon />
                        </div>
                        <span>161 listings</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default HouseDetailsPage;
