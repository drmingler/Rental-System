import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import talking from "../../assets/img/Straight_talking.webp";
import provenResult from "../../assets/img/Proven_results.webp";
import pingYou from "../../assets/img/Ping_you.webp";

const ProvenResultsList = ({ title, content, image }) => {
  return (
    <Col lg={4} md={12}>
      <Col lg={12} md={12}>
        <div className="proven-results-image">
          <img src={image} alt="" />
        </div>
      </Col>
      <Col lg={12} md={12} className="proven-results-text">
        <h3>{title}</h3>
        <span>{content}</span>
      </Col>
    </Col>
  );
};
const ProvenResults = () => {
  return (
    <section className="proven-results">
      <Container>
        <Row>
          <ProvenResultsList
            title={"We’ll ping you!"}
            content={
              "   We enable direct, real-time chat with advertisers, from any\n" +
              "                device."
            }
            image={pingYou}
          />
          <ProvenResultsList
            title={"Proven results"}
            content={
              "In 2019, 60% of bookings were completed within 36 hours of a\n" +
              "                tenant reaching out."
            }
            image={provenResult}
          />
          <ProvenResultsList
            title={"Straight talking"}
            content={
              "I Enable SMS and email notifications for your HousingAnywhere inbox so you don’t miss a single word."
            }
            image={talking}
          />
        </Row>
      </Container>
    </section>
  );
};
export default ProvenResults;
