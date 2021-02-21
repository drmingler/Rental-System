import React, { Fragment } from "react";
import MobileNavbar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import { Header } from "../components/HouseDetailsPage/index";
import { Col, Container, Row } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import PropertyImage1 from "../assets/img/property-image-1.jpg";
import PropertyImage2 from "../assets/img/property-image-2.jpg";
import PropertyImage3 from "../assets/img/property-image-3.jpg";

const PropertyImage = ({ Image }) => {
  return (
    <Col md={4}>
      <Paper
        elevation={0}
        className="property-image"
        style={{ backgroundImage: `url(${Image})` }}
      />
    </Col>
  );
};
const HouseDetailsPage = () => {
  return (
    <Fragment>
      <MobileNavbar />
      <NavBar fixed={true} />
      <Header />
      <section className="property-images-section">
        <Container>
          <Row>
            <Col md={9} className="property-image-container">
              <Row>
                <PropertyImage Image={PropertyImage1} />
                <PropertyImage Image={PropertyImage2} />
                <PropertyImage Image={PropertyImage3} />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default HouseDetailsPage;
