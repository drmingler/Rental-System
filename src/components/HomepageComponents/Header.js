import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import GoogleMapSearch from "./GoogleMapSearch";

function Header() {
  const [activeButton, setActiveButton] = useState("rent");

  const handleSetButton = buttonName => {
    setActiveButton(buttonName);
  };
  return (
    <header className="header-container">
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="header-title">Renting Done Right. Finally.</h1>
            <div className="header-input">
              <Col md={10} lg={7}>
                <div className="rent-list-btn">
                  <button
                    onClick={() => handleSetButton("rent")}
                    className={`rent-btn ${activeButton === "rent" &&
                      "rent-btn-active"}`}
                  >
                      Rent
                  </button>
                    <button
                        onClick={() => handleSetButton("list")}
                        className={`list-btn ${activeButton === "list" &&
                        "list-btn-active"}`}
                    >
                        List
                    </button>
                </div>
                  <GoogleMapSearch/>
              </Col>
              <div className="header-btn-container">
                <p>Market your property to millions</p>
                <Link to={"/list"}>
                  <button>List Your Rental</button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
