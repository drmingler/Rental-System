import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const HowToRentProperty = () => {
  return (
    <section className="how-to-rent-section">
      <Container fluid="lg">
        <Row>
          <Col md={12} lg={9}>
            <div>
              <h3 className="how-to-rent-header">How to rent this property</h3>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    I like this property, how do I book it?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <span>
                      When you find a property you like it's fairly simple to
                      make enquires. Both the tenant and the landlord need to be
                      in contact. This is how it works:
                    </span>
                    <div>
                      <ol>
                        <li>
                          Contact the Landlord by clicking on the contact or
                          apply button.
                        </li>
                        <li>You will be given the Landlord's phone number.</li>
                        <li>
                          You might decide to call or write him/her a message
                          from our website.
                        </li>
                        <li>
                          When the Landlord replies your message, you will
                          receive a notification via email.
                        </li>
                      </ol>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Can I view this property?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <span>
                      Even though we already have a lot of pictures of the
                      property, it is necessary to view the house. Agree on a date
                      when you and the Landlord can meet, inorder to view the
                        property.
                    </span>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    What happens after contacting the Landlord?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Please note that, we only match Landlords directly to
                    prospective Tenants. We are not responsible for whatever
                    happens after that.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HowToRentProperty;
