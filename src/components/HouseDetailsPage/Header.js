import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import CustomTransition from "../CommonComponents/CustomTransition";
import HouseImage from "../../assets/img/0be3acfcb6d1bd77327fee16dbe221877d7e314a.jpg";
import MoneyIconWhite from "../../assets/img/amenities/white-colour/money-icon-white.svg";
import CatIconWhite from "../../assets/img/amenities/white-colour/cat-icon-white.svg";
import DogIconWhite from "../../assets/img/amenities/white-colour/dog-icon-white.svg";
import BedIconWhite from "../../assets/img/amenities/white-colour/bed-icon-white.svg";
import SqrtIconWhite from "../../assets/img/amenities/white-colour/sqrt-icon-white.svg";
import BathIconWhite from "../../assets/img/amenities/white-colour/bath-icon-white.svg";
import Utilities from "./Utilities";


const Header = () => {
  const [animateBackground, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <header className="house-details-header">
      <CustomTransition
        state={animateBackground}
        initialClass={"house-details-background-image"}
        finalClass={"animate"}
        style={{ backgroundImage: `url(${HouseImage})` }}
      />
      <Container className="property-header-container" fluid={"lg"}>
        <Row>
          <Col sm={12} className="property-header-address">
            <div className="address-wrapper apartment">
              <span>Apartment</span>
            </div>
            <div className="address-wrapper address">
              <span>652 S Dunsmuir Ave, Los Angeles, CA 90036, USA</span>
            </div>
          </Col>
          <Col sm={12} className="property-utility-summary">
            <Row>
              <Col sm={9} md={12} lg={9} className="property-utilities">
                <h1>Dunsmuir AVN</h1>
                <div className="utilities-item-wrapper">
                  <ul>
                    <Utilities
                        value={"$ 500"}
                        name={"Deposit"}
                        icon={MoneyIconWhite}
                    />
                    <Utilities value={1} name={"Bed"} icon={BedIconWhite} />
                    <Utilities value={1} name={"Bath"} icon={BathIconWhite} />
                    <Utilities
                        value={"Music Instrument"}
                        name={"Allowed"}
                        icon={CatIconWhite}
                    />
                    <Utilities
                        value={"Pet"}
                        name={"Allowed"}
                        icon={DogIconWhite}
                    />
                    <Utilities
                        value={"Smoking"}
                        name={"Allowed"}
                        icon={CatIconWhite}
                    />
                    <Utilities value={950} name={"SQRT"} icon={SqrtIconWhite} />
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
