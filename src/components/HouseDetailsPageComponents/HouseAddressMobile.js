import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Utilities from "./Utilities";
import DogIconGray from "../../assets/img/amenities/gray-colour/dog-icon-gray.svg";
import CatIconGray from "../../assets/img/amenities/gray-colour/cat-icon-gray.svg";
import MoneyIconGray from "../../assets/img/amenities/gray-colour/money-icon-gray.svg";

const HouseAddressMobile = () => {
  return (
    <section className="house-address-mobile">
      <Container>
        <Row>
          <Col md={12}>
            <h1>No Broker fee Downtown JC</h1>
            <div className="address-wrapper-mobile">
              <div>
                <span>1st Street, Jersey City, NJ 07302, USA Unit 2</span>
              </div>
              <div className="house-type">
                <span>Apartment</span>
              </div>
            </div>
            <div className="house-rules">
              <Utilities value={"Pets"} name={"Allowed"} icon={DogIconGray}/>
              <Utilities
                  value={"Smoking"}
                  name={"Allowed"}
                  icon={CatIconGray}
              />
              <Utilities
                  value={"$ 1000"}
                  name={"Deposit"}
                  icon={MoneyIconGray}
              />
              <Utilities
                  value={"Music Instrument"}
                  name={"Allowed"}
                  icon={CatIconGray}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HouseAddressMobile;
