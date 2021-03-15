import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Paper from "@material-ui/core/Paper";
import { ReactComponent as SubscriptionIcon } from "../assets/img/make-payment.svg";
import { ReactComponent as TransactionHistoryIcon } from "../assets/img/invoice.svg";
import { PaymentPanel, TransactionHistory } from "../components/PaymentPages/index";

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
            <PaymentPanel />
            {/*<TransactionHistory />*/}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};
export default PaymentSettingsPage;
