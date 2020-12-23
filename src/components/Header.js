import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Header() {
  return (
    <header className="header-container">
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="header-title">Renting Done Right. Finally.</h1>
            <div className="header-input">
              <Col md={10} lg={7}>
                <div className="rent-list-btn">
                  <button className="rent-btn">Rent</button>
                  <button className="list-btn">List</button>
                </div>
                <div className="input-container">
                  <input placeholder="Where do you want to live?" type="text" />
                  <ul className={"location-dropdown"}>
                    <li> Hello </li>
                    <li> Hello </li>
                    <li> Hello </li>
                    <li> Hello </li>
                    <li> Hello </li>
                  </ul>
                </div>
              </Col>
              <div className="header-btn-container">
                <p>Market your property to millions</p>
                <button>List Your Rental</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
