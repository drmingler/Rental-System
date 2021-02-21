import React, { Fragment } from "react";
import MobileNavbar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import {
  Header,
  HouseImagesSection
} from "../components/HouseDetailsPage/index";

const HouseDetailsPage = () => {
  return (
    <Fragment>
      <MobileNavbar />
      <NavBar fixed={true} />
      <Header />
      <HouseImagesSection />
    </Fragment>
  );
};
export default HouseDetailsPage;
