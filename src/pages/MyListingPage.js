import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import MobileNavbar from "../components/MobileNavBar";
import {
  ListingsCardSection,
  AddPropertySection
} from "../components/MyListingPage/index";

const MyListingsPage = () => {
  return (
    <Fragment>
      <NavBar fixed={true} />
      <MobileNavbar />
      <Container className="my-listings-container" fluid={"lg"}>
        <AddPropertySection />
        <ListingsCardSection />
      </Container>
    </Fragment>
  );
};
export default MyListingsPage;
