import React from "react";
import Layout from "../components/Layout";
import {Col, Container, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import {ReactComponent as CheckIcon} from "../assets/img/check.svg";
import pricingBackground from "../assets/img/pricing-background.gif"

const PricingPage = () => {
  return (
    <Layout fixed={true}>
      <section className="pricing-page">
        <Container>
          <Row>
            <Col lg={4}>
              <Paper elevation={0} className="pricing-card">
                <span className="price-name">Free</span>
                <div className="price-amount">
                  <span className="amount">$0</span>
                  &nbsp;
                  <span className="duration">/</span>
                  &nbsp;
                  <span className="duration">Month</span>
                </div>
                <div className="price-description">
                  <span>
                    For most businesses that want to optimize we queries
                  </span>
                </div>
                <div className="pricing-features-wrapper">
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon/>
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon/>
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon/>
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon/>
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                </div>
                <button className="plan-button">
                  Choose a plan
                </button>
              </Paper>
            </Col>
            <Col lg={4}>
              <Paper elevation={0} className="pricing-card">
                <span className="price-name">Base</span>
                <div className="price-amount">
                  <span className="amount">$20</span>
                  &nbsp;
                  <span className="duration">/</span>
                  &nbsp;
                  <span className="duration">Month</span>
                </div>
                <div className="price-description">
                  <span>
                    For most businesses that want to optimize we queries
                  </span>
                </div>
                <div className="pricing-features-wrapper">
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon/>
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon/>
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon/>
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon/>
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                </div>
                <button className="plan-button">
                  Choose a plan
                </button>
              </Paper>
            </Col>
            <Col lg={4}>
              <Paper elevation={0} className="pricing-card popular-card"  style={{ backgroundImage: `url(${pricingBackground})` }}>
                <span className="price-name">Popular</span>
                <div className="price-amount">
                  <span className="amount">$250</span>
                  &nbsp;
                  <span className="duration">/</span>
                  &nbsp;
                  <span className="duration">Yearly</span>
                </div>
                <div className="price-description">
                  <span>
                    For most businesses that want to optimize we queries
                  </span>
                </div>
                <div className="pricing-features-wrapper">
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon/>
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon/>
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon/>
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon/>
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                </div>
                <button className="plan-button">
                  Choose a plan
                </button>
              </Paper>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};
export default PricingPage;
