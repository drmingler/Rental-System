import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Layout from "../Layout/Layout";
import Paper from "@material-ui/core/Paper";
import {ReactComponent as SubscriptionIcon} from "../../assets/img/make-payment.svg";
import {ReactComponent as TransactionHistoryIcon} from "../../assets/img/invoice.svg";
import {withRouter} from "react-router-dom";

const PaymentLayout = ({ children, history, location }) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname.split("/")[2];
    location.state
      ? setMenu(location.state.activeButton)
      : setMenu(currentPath);
  }, [location.pathname, location.state]);

  const handleClick = pageName => {
    const newLocation = {
      pathname: `${pageName}`,
      state: { activeButton: pageName }
    };
    return history.push(newLocation);
  };

  return (
    <Layout fixed={true}>
      <section className="payment-page">
        <Container>
          <Row>
            <Col md={4}>
              <Paper elevation={1} className="payment-sidebar">
                <h3>Payments</h3>
                <ul className="sidebar-option-wrapper">
                  <li
                    className={`${menu === "subscribe" && "active"}`}
                    onClick={() => handleClick("subscribe")}
                  >
                    <SubscriptionIcon className="icon" />
                    <span className="text">Subscription</span>
                  </li>
                  <li
                    className={`${menu === "history" && "active"}`}
                    onClick={() => handleClick("history")}
                  >
                    <TransactionHistoryIcon className="icon" />
                    <span className="text">Transaction History</span>
                  </li>
                </ul>
              </Paper>
            </Col>
            {children}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};
export default withRouter(PaymentLayout);
