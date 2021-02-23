import React, { Fragment } from "react";
import MobileNavbar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import {
  Header,
  HouseDescriptionSection,
  HouseImagesSection,
  HouseAmenitiesSection,
  ContactLandlordSection
} from "../components/HouseDetailsPage/index";
import { Container, Row, Col } from "react-bootstrap";

const HouseDetailsPage = () => {
  return (
    <Fragment>
      <MobileNavbar />
      <NavBar fixed={true} />
      <Header />
      <HouseImagesSection />
      <HouseDescriptionSection />
      <HouseAmenitiesSection />
      <ContactLandlordSection />
    </Fragment>
  );
};
export default HouseDetailsPage;
