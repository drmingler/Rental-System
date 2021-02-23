import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import useToggle from "../hooks/useToggle";
import Switch from "./Switch";
import { Link } from "react-router-dom";

function Steps() {
  const { showActive, setActive } = useToggle();
  return (
    <section className="rental-steps-container">
      <Container>
        <Row>
          <Col lg={12}>
            <Switch showActive={showActive} setActive={setActive} />
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
            <Link to={"/renting-instruction"}>
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Steps;
