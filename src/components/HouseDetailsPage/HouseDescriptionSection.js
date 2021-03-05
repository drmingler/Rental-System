import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

let text =
  "Our building amenities allow for making the most of modern-day conveniences. The friendly 24-hour concierge will help take care of your packages, dry cleaning and greet you every day with a smile. Sit back and relax in our effortlessly chic lounge that doubles as a beautiful workspace to share with friends. Spend quality time entertaining or just getting to know your neighbors in our unique game room. There's no need to leave home to work out either. Our expansive, state-of-the-art fitness center features Cycles, free weights, cardio equipment and much more to help get you in the best shape of your life. Apartment living should not be limited to just your personal space. Take a well-deserved break and escape from reality with our luxurious building amenities. Having it all within your building takes the Jersey City living experience to the next level.";

const HouseDescriptionSection = () => {
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
                    <span>{text.substring(0, 400) + "... "}</span>
                    <span className={"full-description"} onClick={showText}>
                      {" "}
                      Full description
                    </span>
                  </Fragment>
                )}
                {fullText && <span>{text}</span>}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HouseDescriptionSection;
