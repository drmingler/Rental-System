import React, {Fragment, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

const HouseDescriptionSection = ({propertyDescription}) => {
  const [fullText, showFullText] = useState(false);

  function showText() {
    showFullText(true);
  }

  return (
    <section className="property-description-section">
      <Container fluid="lg">
        <Row>
          <Col md={12} lg={9}>
            <div className="property-description">
              <h1 className="header-text">Apartment Description</h1>
              <div className="property-description-text">
                {!fullText && (
                  <Fragment>
                    <span>{propertyDescription.substring(0, 400) + "... "}</span>
                    <span className={"full-description"} onClick={showText}>
                      {" "}
                      Full description
                    </span>
                  </Fragment>
                )}
                {fullText && <span>{propertyDescription}</span>}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HouseDescriptionSection;
