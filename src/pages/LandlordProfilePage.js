import {Layout} from "../components/LayoutComponents/index";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {HouseCard} from "../components/CommonComponents/index";
import Berlin from "../assets/img/Berlin.webp";
import UserPlaceholderIcon from "../assets/img/user_mock_big.svg";

const LandlordProfilePage = () => {
  return (
    <Layout fixed={true}>
      <div className="landlord-profile">
        <section>
          <Container>
            <Row>
              <Col md={6} className="mb-5">
                <div className="landlord-contact">
                  <div className="initial-wrapper">
                    <h1 className="landlord-initials">AL</h1>
                    <div className="landlord-photo-wrapper">
                      {/*<img src={Berlin} alt="landlord"/>*/}
                      <img src={UserPlaceholderIcon} alt="landlord" />
                    </div>
                  </div>
                  <h1 className="landlord-name">Emma Properties</h1>
                  <span>+ 1 (212) 448-9400</span>
                </div>
              </Col>
              <Col md={6}>
                <h1 className="landlord-profile-header">Emma's Properties</h1>
                <Row className="justify-content-center">
                  <Col lg={9} xl={7}>
                    <HouseCard image={Berlin} />
                  </Col>
                  <Col lg={9} xl={7}>
                    <HouseCard image={Berlin} />
                  </Col>
                  <Col lg={9} xl={7}>
                    <HouseCard image={Berlin} />
                  </Col>
                  <Col lg={9} xl={7}>
                    <HouseCard image={Berlin} />
                  </Col>
                  <Col lg={9} xl={7}>
                    <HouseCard image={Berlin} />
                  </Col>
                  <Col lg={9} xl={7}>
                    <HouseCard image={Berlin} />
                  </Col>
                </Row>
                  <div className="show-more-wrapper mt-4">
                      <button className="show-more-btn">Show more</button>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Layout>
  );
};
export default LandlordProfilePage;
