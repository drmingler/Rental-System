import React from "react";
import {Layout} from "../components/LayoutComponents/index";
import {Col, Container, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import {ReactComponent as CheckIcon} from "../assets/img/check.svg";
import pricingBackground from "../assets/img/pricing-background.gif";
import {PerfectPlace} from "../components/CommonComponents/index";
import {RentingHeader} from "../components/PlatformUsageComponents/index";
import rentBG3 from "../assets/img/newProperty3.jpg";
import rentBG2 from "../assets/img/newProperty2.jpg";
import rentBG1 from "../assets/img/newProperty.jpg";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const PricingPage = () => {
  return (
    <Layout>
      <div className="pricing-header">
        <RentingHeader
          largeImage={rentBG3}
          mediumImage={rentBG2}
          smallImage={rentBG1}
        >
          <Col lg={12}>
            <h1 className="pricing-header-text">Get the best listing plan</h1>
            <span className="pricing-text">
              Make your property visible to thousands of tenants by choosing one
              of our great plans
            </span>
          </Col>
        </RentingHeader>
      </div>
      <section className="pricing-page">
        <Container>
          <h1 className="pricing-cards-header">Our Affordable Pricing Plans</h1>
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
                      <CheckIcon />
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon />
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon />
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon />
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                </div>
                <button className="plan-button">Choose a plan</button>
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
                      <CheckIcon />
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon />
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon />
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon />
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                </div>
                <button className="plan-button">Choose a plan</button>
              </Paper>
            </Col>
            <Col lg={4}>
              <Paper
                elevation={0}
                className="pricing-card popular-card"
                style={{ backgroundImage: `url(${pricingBackground})` }}
              >
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
                      <CheckIcon />
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon />
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon />
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                  <div className="pricing-feature">
                    <div className="check-icon">
                      <CheckIcon />
                    </div>
                    <span className="feature">All limited links</span>
                  </div>
                </div>
                <button className="plan-button">Choose a plan</button>
              </Paper>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="faq-pricing-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <div>
                <h3 className="how-to-rent-header">
                  Frequently Asked Questions
                </h3>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <span>I like this property, how do I book it?</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <span>What happens after contacting the Landlord?</span>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <span>Can I view this property?</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <span>
                      <span>
                        Even though we already have a lot of pictures of the
                        property, it is necessary to view the house. Agree on a
                        date when you and the Landlord can meet, inorder to view
                        the property.
                      </span>
                    </span>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <span>What happens after contacting the Landlord?</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <span>
                      Please note that, we only match Landlords directly to
                      prospective Tenants. We are not responsible for whatever
                      happens after that.
                    </span>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <PerfectPlace />
    </Layout>
  );
};
export default PricingPage;
