import React, { useState } from "react";
import "../assets/scss/style.scss";
import { Container, Col, Row } from "react-bootstrap";
import Header from "../components/Header";
import Cities from "../components/Cities";

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="App">
      <Header />
      <Cities />
      <footer className="footer-container">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="switch">
                <Col md={10} lg={7} xl={6} sm={12}>
                  <div className="switch-btn">
                    <button
                      className={`${active && "active"}`}
                      onClick={() => setActive(true)}
                    >
                      <span>For tenants</span>
                    </button>
                    <button
                      className={`${!active && "active"}`}
                      onClick={() => setActive(!active)}
                    >
                      For landlords
                    </button>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
