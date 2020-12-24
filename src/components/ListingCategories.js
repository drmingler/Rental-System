import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ListingCategories() {
  return (
    <section className="listing-categories-section">
      <h1>Listing Categories</h1>
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col xs={6} className="right-border">
                <ul>
                  <li>
                    <a href="/">Austin, TX, USA</a>
                  </li>
                </ul>
              </Col>
              <Col xs={6} className="right-border">
                <ul>
                  <li>
                    <a href="/">Austin, TX, USA</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6} className="right-border">
                <ul>
                  <li>
                    <a href="/">Austin, TX, USA</a>
                  </li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul>
                  <li>
                    <a href="/">Austin, TX, USA</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ListingCategories;
