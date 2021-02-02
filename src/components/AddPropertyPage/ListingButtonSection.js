import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ListingButtonSection = () => {
  return (
    <section className="post-listing-button-section">
      <Container fluid="lg">
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 5, offset: 3 }}>
            <button className="listing-button">Save & Post</button>
            <div className="listing-terms">
              <span>
                By clicking "Save & Post" you agree to <br /> our{" "}
                <a href="/">Listing Requirements</a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ListingButtonSection;
