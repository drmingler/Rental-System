import React, { useState } from "react";
import "../assets/scss/style.scss";
import { Container, Col, Row } from "react-bootstrap";

function Steps() {
  const [active, setActive] = useState(false);
  return (
    <section className="rental-steps-container">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="switch">
              <Col md={10} lg={7} xl={6} sm={12}>
                <div className="switch-btn">
                  <button
                    className={`${active && "active"}`}
                    onClick={() => setActive(true)}
                  >
                    <span>For tenants</span>
                  </button>
                  <button
                    className={`${!active && "active"}`}
                    onClick={() => setActive(!active)}
                  >
                    <span>For landlords</span>
                  </button>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
        <div className="rental-instruction">
          <Row>
            <Col md={12} lg={4}>
              <div className="rental-info">
                <div className="info-img-container">
                  <img
                    src={
                      "https://thumb.housinganywhere.com/dist/tenant-1-b51ad9261a4b09df2cf9947d2631dd51.bundle.svg"
                    }
                    alt={"rental-step"}
                  />
                </div>
                <div className="info-content">
                  <h3>Search fast, search smart</h3>
                  <p>
                    Browse hundreds of properties in your city of choice. Save
                    your favorites and set up search alerts so you don't miss
                    your dream place!
                  </p>
                </div>
                <p className="step-number">1.</p>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className="rental-info">
                <div className="info-img-container">
                  <img
                    src={
                      "https://thumb.housinganywhere.com/dist/tenant-3-e283200aa0fea31c1431611f1815d29e.bundle.svg"
                    }
                    alt={"rental-step"}
                  />
                </div>
                <div className="info-content">
                  <h3>Search fast, search smart</h3>
                  <p>
                    Browse hundreds of properties in your city of choice. Save
                    your favorites and set up search alerts so you don't miss
                    your dream place!
                  </p>
                </div>
                <p className="step-number">2.</p>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className="rental-info">
                <div className="info-img-container">
                  <img
                    src={
                      "https://thumb.housinganywhere.com/dist/tenant-1-b51ad9261a4b09df2cf9947d2631dd51.bundle.svg"
                    }
                    alt={"rental-step"}
                  />
                </div>
                <div className="info-content">
                  <h3>Search fast, search smart</h3>
                  <p>
                    Browse hundreds of properties in your city of choice. Save
                    your favorites and set up search alerts so you don't miss
                    your dream place!
                  </p>
                </div>
                <p className="step-number">3.</p>
              </div>
            </Col>
          </Row>
          <div className="learn-more-btn">
            <button>Learn More</button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Steps;
