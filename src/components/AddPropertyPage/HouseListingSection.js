import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ImageUploaderContainer,
  ListingInstructions,
  ListingIconContainer
} from "./index";
import TextField from "@material-ui/core/TextField";
import { ReactComponent as AlertCircle } from "../../assets/img/alert-circle.svg";

function HouseListingSection() {
  return (
    <section className="house-listing-section">
      <Container fluid="lg">
        <Row>
          <ImageUploaderContainer />
          <ListingInstructions offset={0}  InstructionKey={"instruction1"}>
            Tenants like to see photos of listed property. The first photo will
            be used as a listing cover.
          </ListingInstructions>
        </Row>
        <div className="pet-policy">
          <h1 className="section-header">Pet Policy</h1>
          <Row>
            <Col md={8}>
              <div className="pet-policy-items-container">
                <Row>
                  <Col md={4} lg={3} xs={6} className="listing-icon-container">
                    <ListingIconContainer
                      icon={<AlertCircle />}
                      text={"Dogs Allowed"}
                    />
                  </Col>
                  <Col md={4} lg={3} xs={6} className="listing-icon-container">
                    <ListingIconContainer
                      icon={<AlertCircle />}
                      text={"Cats Allowed"}
                    />
                  </Col>
                  <Col md={4} lg={3} xs={6} className="listing-icon-container">
                    <ListingIconContainer
                      icon={<AlertCircle />}
                      text={"No Pets"}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <ListingInstructions offset={1}  InstructionKey={"instruction2"}>
              Is your property pet-friendly? 61% of tenants in the US live with
              their little friends.
            </ListingInstructions>
          </Row>
        </div>
        <div className="listing-description">
          <h1 className="section-header">Description</h1>
          <Row>
            <Col md={8}>
              <TextField
                className="property-name"
                placeholder="Type a short description"
                fullWidth
                margin="normal"
                helperText="Minimum 140 characters"
              />
            </Col>
            <ListingInstructions offset={1}  InstructionKey={"instruction3"}>
              Describe what differentiates your property from others.
            </ListingInstructions>
          </Row>
        </div>
      </Container>
    </section>
  );
}
export default HouseListingSection;
