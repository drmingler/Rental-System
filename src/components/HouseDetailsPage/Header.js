import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import CustomTransition from "../CustomTransition";
import HouseImage from "../../assets/img/0be3acfcb6d1bd77327fee16dbe221877d7e314a.jpg";
import {ReactComponent as ArrowDownRight} from "../../assets/img/arrow-right-circle.svg";
import MoneyIconWhite from "../../assets/img/amenities/white-colour/money-icon-white.svg";
import BedIconWhite from "../../assets/img/amenities/white-colour/bed-icon-white.svg";
import CatIconWhite from "../../assets/img/amenities/white-colour/cat-icon-white.svg";
import DogIconWhite from "../../assets/img/amenities/white-colour/dog-icon-white.svg";
import SqrtIconWhite from "../../assets/img/amenities/white-colour/sqrt-icon-white.svg";
import BathIconWhite from "../../assets/img/amenities/white-colour/bath-icon-white.svg";


const Utilities = ({ icon, value, name }) => {
  return (
    <li className="property-utility">
      <div
        className="icon-wrapper"
        style={{ backgroundImage: `url(${icon}` }}
      />
      <span className="value">{value}</span>
      <span className="name">{name}</span>
    </li>
  );
};
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
      <Container className="property-header-container">
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
              <Col sm={9} className="property-utilities">
                <h1>Dunsmuir AVN</h1>
                <div className="utilities-item-wrapper">
                  <ul>
                    <Utilities value={1} name={"Bed"} icon={BedIconWhite} />
                    <Utilities value={1} name={"Bath"} icon={BathIconWhite} />
                    <Utilities value={950} name={"SQRT"} icon={SqrtIconWhite} />
                    <Utilities
                      value={"Dogs"}
                      name={"Allowed"}
                      icon={DogIconWhite}
                    />
                    <Utilities
                      value={"Cats"}
                      name={"Cats"}
                      icon={CatIconWhite}
                    />
                    <Utilities
                      value={"$ 500"}
                      name={"Deposit"}
                      icon={MoneyIconWhite}
                    />
                  </ul>
                </div>
              </Col>
              <Col sm={3}>
                <Paper elevation={1} className="apply-for-property">
                  <div className="property-monthly-price">
                    <div className="monthly-price-header">
                      <span>Monthly Price</span>
                    </div>
                    <div className="price">
                      <ArrowDownRight className="arrow-icon" />
                      <span>$1,500</span>
                    </div>
                  </div>
                  <div className="property-availability">
                    <span className="available">Available:</span>
                    <span className="right-now">Right Now</span>
                  </div>
                  <button className="apply-for-property-button">Apply</button>
                </Paper>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
