import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as PlusIcon } from "../assets/img/plus-icon.svg";
import NavBar from "../components/NavBar";
import MobileNavbar from "../components/MobileNavBar";
import Paper from "@material-ui/core/Paper";
import { ListingsCardSection } from "../components/MyListingPage/index";

const MyListingsPage = () => {
  return (
    <Fragment>
      <NavBar fixed={true} />
      <MobileNavbar />
      <Container className="my-listings-container" fluid={"lg"}>
        <Row>
          <Col md={4}>
            <Paper elevation={0} className="add-property-wrapper">
              <div className="plus-icon-wrapper">
                <PlusIcon />
              </div>
              <span className="add-property-text">Add property</span>
              <div className="rent-place-faster">
                <span>Rent your place faster!</span>
              </div>
            </Paper>
          </Col>
          <Col md={8} className="add-description-wrapper">
            <div className="add-property-description">
              <h1 className="heading">Let’s start!</h1>
              <span className="text">
                Add your properties and attract quality tenants.
              </span>
            </div>
          </Col>
        </Row>
        <ListingsCardSection />
      </Container>
    </Fragment>
  );
};
export default MyListingsPage;
