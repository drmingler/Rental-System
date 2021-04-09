import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import talking from "../../assets/img/Straight_talking.webp";
import provenResult from "../../assets/img/Proven_results.webp";
import pingYou from "../../assets/img/Ping_you.webp";

const ProvenResultsMobile = () => {
  return (
    <section className="proven-results-mobile">
      <Container>
        <Row>
          <Col xs={12} className="proven-results-mobile-wrapper">
            <Row>
              <Col xs={3}>
                <div className="proven-results-image">
                  <img src={talking} alt="" />
                </div>
              </Col>
              <Col xs={9} className="proven-results-text">
                <h4>We’ll ping you!</h4>
                <span>
                  We enable direct, real-time chat with advertisers, from any
                  device.
                </span>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="proven-results-mobile-wrapper">
            <Row>
              <Col xs={3}>
                <div className="proven-results-image">
                  <img src={provenResult} alt="" />
                </div>
              </Col>
              <Col xs={9} className="proven-results-text">
                <h4>Proven results</h4>
                <span>
                  In 2019, 60% of bookings were completed within 36 hours of a
                  tenant reaching out.
                </span>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="proven-results-mobile-wrapper">
            <Row>
              <Col xs={3}>
                <div className="proven-results-image">
                  <img src={pingYou} alt="" />
                </div>
              </Col>
              <Col xs={9} className="proven-results-text">
                <h4>Straight talking</h4>
                <span>
                  Enable SMS and email notifications for your HousingAnywhere
                  inbox so you don’t miss a single word.
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ProvenResultsMobile;
