import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ImageUploaderContainer,
  ListingImageInstructions,
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
          <ListingImageInstructions offset={0}>
            Tenants like to see photos of listed property. The first photo will
            be used as a listing cover.
          </ListingImageInstructions>
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
            <ListingImageInstructions offset={1}>
              Is your property pet-friendly? 61% of tenants in the US live with
              their little friends.
            </ListingImageInstructions>
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
            <ListingImageInstructions offset={1}>
              Describe what differentiates your property from others.
            </ListingImageInstructions>
          </Row>
        </div>
      </Container>
    </section>
  );
}
export default HouseListingSection;
