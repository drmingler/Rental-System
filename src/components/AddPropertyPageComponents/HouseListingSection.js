import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {HouseRulesIconWrapper, ImageUploaderContainer, ListingInstructions} from "./index";
import TextField from "@material-ui/core/TextField";
import {houseRulesConfig} from "../../helpers/PropertyConstants";


function HouseListingSection() {
  const [houseRules, selectHouseRule] = useState({});

  return (
      <section className="house-listing-section">
        <Container fluid="lg">
          <Row>
            <ImageUploaderContainer/>
          <ListingInstructions offset={0} InstructionKey={"instruction1"}>
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
                  {houseRulesConfig.map(rules => (
                      <HouseRulesIconWrapper
                          selectHouseRule={selectHouseRule}
                          houseRules={houseRules}
                          ActiveIcon={rules.iconPurple}
                          InactiveIcon={rules.iconLight}
                          text={rules.text}
                          key={rules.key}
                          customKey={rules.key}
                          value={rules.value}
                      />
                  ))}
                </Row>
              </div>
            </Col>
            <ListingInstructions offset={1} InstructionKey={"instruction2"}>
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
                className="property-name listing-description-input"
                placeholder="Type a short description"
                multiline
                fullWidth
                margin="normal"
                helperText="Minimum 140 characters"
              />
            </Col>
            <ListingInstructions offset={1} InstructionKey={"instruction3"}>
              Describe what differentiates your property from others.
            </ListingInstructions>
          </Row>
        </div>
      </Container>
    </section>
  );
}
export default HouseListingSection;
