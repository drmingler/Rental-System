import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import rentBG1 from "../../assets/img/newProperty.jpg";
import rentBG2 from "../../assets/img/newProperty2.jpg";
import rentBG3 from "../../assets/img/newProperty3.jpg";

const RentingFooter = () => {
  return (
    <section className="renting-search">
      <Container>
        <picture>
          <source media="(max-width:478px)" srcSet={rentBG1} />
          <source media="(max-width:1366px)" srcSet={rentBG2} />
          <img alt="renting-bg" srcSet={rentBG3} />
        </picture>
        <Row>
          <Col lg={12}>
            <div className="renting-search-content">
              <h1>Find a place that feels like home</h1>
              <button>Search Now</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default RentingFooter;
