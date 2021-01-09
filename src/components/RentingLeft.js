import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const RentingLeft = ({ children, image }) => {
  return (
    <section className="renting-services">
      <Container>
        <Row className="services-container">
          <Col lg={6} xs={12}>
            {children}
          </Col>
          <Col lg={5} xs={12} className="service-image-container left">
            <div className="service-image">{image}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default RentingLeft;
