import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import CustomTransition from "../CommonComponents/CustomTransition";
import MoneyIconWhite from "../../assets/img/amenities/white-colour/money-icon-white.svg";
import CatIconWhite from "../../assets/img/amenities/white-colour/cat-icon-white.svg";
import DogIconWhite from "../../assets/img/amenities/white-colour/dog-icon-white.svg";
import BedIconWhite from "../../assets/img/amenities/white-colour/bed-icon-white.svg";
import SqrtIconWhite from "../../assets/img/amenities/white-colour/sqrt-icon-white.svg";
import BathIconWhite from "../../assets/img/amenities/white-colour/bath-icon-white.svg";
import SmokingWhite from "../../assets/img/amenities/white-colour/cigarrete-white.svg";

import Utilities from "./Utilities";
import {addComma} from "../../helpers/utils";

const Header = ({ propertyImages, currentProperty }) => {
  const [animateBackground, setAnimation] = useState(false);
  const {
    propertyName,
    propertyType,
    propertyAddress,
    securityDeposit,
    numberOfBathrooms,
    numberOfBedrooms,
    size,
    propertyRules
  } = currentProperty || {};
  const { musicalInstruments, pet, smoking } = propertyRules || {};

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <header className="house-details-header">
      <CustomTransition
        state={animateBackground}
        initialClass={"house-details-background-image"}
        finalClass={"animate"}
        style={{ backgroundImage: `url(${propertyImages[0]})` }}
      />
      <Container className="property-header-container" fluid={"lg"}>
        <Row>
          <Col sm={12} className="property-header-address">
            <div className="address-wrapper apartment">
              <span>{propertyType}</span>
            </div>
            <div className="address-wrapper address">
              <span>{propertyAddress && propertyAddress.address}</span>
            </div>
          </Col>
          <Col sm={12} className="property-utility-summary">
            <Row>
              <Col sm={9} md={12} lg={9} className="property-utilities">
                <h1>{propertyName}</h1>
                <div className="utilities-item-wrapper">
                  <ul>
                    <Utilities
                      value={`₦${addComma(securityDeposit)}`}
                      name={"Deposit"}
                      icon={MoneyIconWhite}
                    />
                    <Utilities
                      value={numberOfBedrooms}
                      name={"Bed"}
                      icon={BedIconWhite}
                    />
                    <Utilities
                      value={numberOfBathrooms}
                      name={"Bath"}
                      icon={BathIconWhite}
                    />
                    {pet && (
                      <Utilities
                        value={"Pet"}
                        name={"Allowed"}
                        icon={DogIconWhite}
                      />
                    )}
                    {smoking && (
                      <Utilities
                        value={"Smoking"}
                        name={"Allowed"}
                        icon={SmokingWhite}
                      />
                    )}
                    {musicalInstruments && (
                      <Utilities
                        value={"Music Instrument"}
                        name={"Allowed"}
                        icon={CatIconWhite}
                      />
                    )}
                    <Utilities
                      value={parseInt(size).toFixed()}
                      name={"SQRT"}
                      icon={SqrtIconWhite}
                    />
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
