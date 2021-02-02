import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ImageUploaderContainer } from "./index";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { ReactComponent as AlertCircle } from "../../assets/img/alert-circle.svg";

function HouseListingInstruction() {
  return (
    <section className="house-listing-section">
      <Container fluid="lg">
        <Row>
          <ImageUploaderContainer />
          <Col md={3}>
            <Paper elevation={0} className="listing-image-instruction">
              <span>
                Tenants like to see photos of listed property. The first photo
                will be used as a listing cover.
              </span>
              <div>
                <a href="/">Got It</a>
              </div>
            </Paper>
          </Col>
        </Row>
        <div className="pet-policy">
          <h1 className="section-header">Pet Policy</h1>
          <Row>
            <Col md={8}>
              <div className="pet-policy-items-container">
                <Row>
                  <Col md={4} lg={3} xs={6} className="listing-icon-container">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Dogs Allowed</span>
                    </div>
                  </Col>
                  <Col md={4} lg={3} xs={6} className="listing-icon-container">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Cats Allowed</span>
                    </div>
                  </Col>
                  <Col md={4} lg={3} xs={6} className="listing-icon-container">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>No Pets</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <Paper elevation={0} className="listing-image-instruction">
                <span>
                  Is your property pet-friendly? 61% of tenants in the US live
                  with their little friends.
                </span>
                <div>
                  <a href="/">Got It</a>
                </div>
              </Paper>
            </Col>
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
            <Col md={{ span: 3, offset: 1 }}>
              <Paper elevation={0} className="listing-image-instruction">
                <span>
                  Describe what differentiates your property from others.
                </span>
                <div>
                  <a href="/">Got it</a>
                </div>
              </Paper>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
export default HouseListingInstruction;
