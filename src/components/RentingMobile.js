import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const RentingMobile = ({ children }) => {
  return (
    <section className="renting-service-mobile">
      <Container>
        <Row>
          <Col md={12} xs={12}>
            {children}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default RentingMobile;
