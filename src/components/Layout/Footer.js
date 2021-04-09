import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={12} lg={4}>
            <div className="footer-icon">
              <a href={"/"} className="fb-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href={"/"} className="mail-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <p>Krypton Project © 2020.</p>
          </Col>
          <Col md={12} lg={8}>
            <Row>
              <Col xs={12} lg={3}>
                <h4>For Tenants</h4>
                <ul>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                  <li>
                    <a href="/">Schedule Tour</a>
                  </li>
                  <li>
                    <a href="/">Negotiate Rent</a>
                  </li>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} lg={3}>
                <h4>For Landlords</h4>
                <ul>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} lg={3}>
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} lg={3}>
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                  <li>
                    <a href="/">Apply Online</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
