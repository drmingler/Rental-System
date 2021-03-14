import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Paper from "@material-ui/core/Paper";
import { ReactComponent as SubscriptionIcon } from "../assets/img/make-payment.svg";
import { ReactComponent as TransactionHistoryIcon } from "../assets/img/invoice.svg";
import { ReactComponent as CheckIcon } from "../assets/img/check.svg";

const PanelRow = ({ plan, price, duration, showTick }) => {
  const [active, setActive] = useState(true);
  return (
    <div className={`panel-row ${active && "active"}`}>
      <div className="plan-type">
        {showTick && (
          <div className="icon">
            <CheckIcon />
          </div>
        )}
        <span className="type">{plan}</span>
      </div>
      <div className="plan-price">
        <span className="price">{price}</span>
        <span>/</span>
        <span className="plan-duration">{duration}</span>
      </div>
      {showTick && <button className="subscribe-button-cancel">Cancel</button>}
      {!showTick && <button className="subscribe-button">Subscribe</button>}
    </div>
  );
};
const PaymentSettingsPage = () => {
  return (
    <Layout fixed={true}>
      <section className="payment-page">
        <Container>
          <Row>
            <Col md={4}>
              <Paper elevation={1} className="payment-sidebar">
                <h3>Payments</h3>
                <ul className="sidebar-option-wrapper">
                  <li className="active">
                    <SubscriptionIcon className="icon" />
                    <span className="text">Subscription</span>
                  </li>
                  <li>
                    <TransactionHistoryIcon className="icon" />
                    <span className="text">Transaction History</span>
                  </li>
                </ul>
              </Paper>
            </Col>
            <Col md={{ span: 7, offset: 1 }}>
              <Paper elevation={1} className="payment-panel">
                <div className="heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="panel-content-container">
                  <PanelRow
                    showTick={true}
                    duration={"Monthly"}
                    plan={"Pro Plan Monthly"}
                    price={"$15.00"}
                  />
                  <PanelRow
                    showTick={false}
                    duration={"Yearly"}
                    plan={"Pro Plan Yearly"}
                    price={"$45.00"}
                  />
                </div>
              </Paper>
            </Col>
            <Col md={{ span: 7, offset: 5 }} className="payment-form">
              <Paper elevation={1} className="payment-panel">
                <div className="heading">
                  <h3>Billing Information</h3>
                </div>
                <div className="panel-content-container"></div>
              </Paper>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};
export default PaymentSettingsPage;
