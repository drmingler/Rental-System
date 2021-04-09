import React from "react";
import "../../assets/scss/style.scss";
import {Col, Container, Row} from "react-bootstrap";
import Berlin from "../../assets/img/Berlin.webp";
import {Link} from "react-router-dom";

function Cities() {
  return (
    <section className="cities-container">
      <Container>
        <div className="cities-title">
          <h1>Featured Cities</h1>
          <p>
            Discover thousands of apartments and homes for rent in 50+ countries
          </p>
        </div>
        <Row>
          <Col md={4} xs={6}>
            <Link to={"/properties"}>
              <div className="city-container">
                <img src={Berlin} alt={"Berlin apartments for rent"} />
                <p className={"city-name"}>Berlin</p>
                <p className={"city-description"}>
                  See all apartments for rent{" "}
                </p>
              </div>
            </Link>
          </Col>
          <Col md={4} xs={6}>
            <div className="city-container">
              <img src={Berlin} alt={"Berlin apartments for rent"} />
              <p className={"city-name"}>Berlin</p>
              <p className={"city-description"}>See all apartments for rent </p>
            </div>
          </Col>
          <Col md={4} xs={6}>
            <div className="city-container">
              <img src={Berlin} alt={"Berlin apartments for rent"} />
              <p className={"city-name"}>Berlin</p>
              <p className={"city-description"}>See all apartments for rent </p>
            </div>
          </Col>
          <Col md={4} xs={6}>
            <div className="city-container">
              <img src={Berlin} alt={"Berlin apartments for rent"} />
              <p className={"city-name"}>Berlin</p>
              <p className={"city-description"}>See all apartments for rent </p>
            </div>
          </Col>
          <Col md={4} xs={6}>
            <div className="city-container">
              <img src={Berlin} alt={"Berlin apartments for rent"} />
              <p className={"city-name"}>Berlin</p>
              <p className={"city-description"}>See all apartments for rent </p>
            </div>
          </Col>
          <Col md={4} xs={6}>
            <div className="city-container">
              <img src={Berlin} alt={"Berlin apartments for rent"} />
              <p className={"city-name"}>Berlin</p>
              <p className={"city-description"}>See all apartments for rent </p>
            </div>
          </Col>
          <Col md={4} xs={6}>
            <div className="city-container">
              <img src={Berlin} alt={"Berlin apartments for rent"} />
              <p className={"city-name"}>Berlin</p>
              <p className={"city-description"}>See all apartments for rent </p>
            </div>
          </Col>
          <Col md={4} xs={6}>
            <div className="city-container">
              <img src={Berlin} alt={"Berlin apartments for rent"} />
              <p className={"city-name"}>Berlin</p>
              <p className={"city-description"}>See all apartments for rent </p>
            </div>
          </Col>
          <Col md={4} xs={6}>
            <div className="city-container">
              <img src={Berlin} alt={"Berlin apartments for rent"} />
              <p className={"city-name"}>Berlin</p>
              <p className={"city-description"}>See all apartments for rent </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cities;
