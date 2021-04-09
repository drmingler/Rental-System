import React from "react";
import "../../assets/scss/style.scss";
import {Col, Container, Row} from "react-bootstrap";

function PerfectPlace() {
  return (
    <section className="perfect-place-section">
      <Container>
        <Row>
          <Col lg={12} className="perfect-place-content">
            <h1>
              This is Suzie. She just booked <br />
                her new home
            </h1>
            <p>“I was looking for a place for ages. Then I discovered </p>
            <p> HousingAnywhere. Within one week I found my new </p>{" "}
            <p> home!”</p>
            <button>Find The Perfect Place</button>
          </Col>
        </Row>
      </Container>
      <img
        src={
          "https://thumb.housinganywhere.com/dist/testimonial-tenant-30cbcc728b32547df28713d1be50258d.bundle.jpg"
        }
        alt="perfect"
      />
      <span />
    </section>
  );
}

export default PerfectPlace;
