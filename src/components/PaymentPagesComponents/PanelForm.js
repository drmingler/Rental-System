import {Col, Container, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import React from "react";

const PanelForm = () => {
  return (
    <Col lg={{ span: 7, offset: 5 }} md={12} className="payment-form">
      <Paper elevation={1} className="payment-panel">
        <div className="heading">
          <h3>Billing Information</h3>
        </div>
        <div className="panel-content-container">
          <Container>
            <Row className="justify-content-center">
              <Col md={8}>
                <form>
                  <TextField
                    label="Cardholder's Name"
                    fullWidth
                    margin="normal"
                  />
                  <TextField label="Card Number" fullWidth margin="normal" />
                  <TextField
                    label="Expiry Date"
                    fullWidth
                    margin="normal"
                    placeholder="MM / YY"
                  />
                  <TextField label="CVC" fullWidth margin="normal" />
                  <TextField
                    label="ZIP / Postal Code"
                    fullWidth
                    margin="normal"
                  />
                  <button className="make-payment-button">Subscribe</button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </Paper>
    </Col>
  );
};

export default PanelForm;
