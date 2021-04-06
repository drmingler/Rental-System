import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";

function AddPropertyHeader() {
  const currencies = [
    {
      value: "Apartment",
      label: "Apartment"
    },
    {
      value: "House",
      label: "House"
    },
    {
      value: "Paid",
      label: "Paid"
    },
    {
      value: "Rent",
      label: "Rent"
    },
    {
      value: "Rent",
      label: "Rent"
    },
    {
      value: "Rent",
      label: "Rent"
    },
    {
      value: "Rent",
      label: "Rent"
    },
    {
      value: "Rent",
      label: "Rent"
    },

  ];

  return (
    <header className="add-property-header">
      <Container fluid={"sm"}>
        <Row>
          <Col xl={8} lg={7} md={12} className="property-form-container">
            <TextField
              className="property-name"
              placeholder="Property Name"
              fullWidth
              margin="normal"
            />

            <Row className="property-contact">
              <Col md={8}>
                <TextField fullWidth label="Address" margin="normal" />
              </Col>
              <Col md={4}>
                <TextField fullWidth label="Unit# (optional)" margin="normal" />
              </Col>
            </Row>

            <Row className="property-facilities">
              <Col md={3}>
                <TextField
                  select
                  fullWidth
                  label="Type"
                  margin="normal"
                  // value={currency}
                  // onChange={handleChange}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Col>
              <Col md={3}>
                <TextField
                  select
                  fullWidth
                  label="Bedroom"
                  margin="normal"
                  // value={currency}
                  // onChange={handleChange}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Col>
              <Col md={3} xs={5}>
                <TextField
                  select
                  fullWidth
                  label="Bath"
                  margin="normal"
                  // value={currency}
                  // onChange={handleChange}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Col>
              <Col md={{ span: 3, offset: 0 }} xs={{ span: 5, offset: 2 }}>
                <TextField fullWidth label="SQFT" margin="normal" />
              </Col>
            </Row>
          </Col>
          <Col
            xl={{ span: 3, offset: 1 }}
            lg={{ span: 4, offset: 1 }}
            md={12}
            className="price-form-container"
          >
            <Paper elevation={0} className="monthly-rent-container">
              <Row className="monthly-rent-inputs">
                <Col md={12}>
                  <TextField
                    label="Monthly Price*"
                    fullWidth
                    margin="normal"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Col>
                <Col md={12}>
                  <TextField
                    label="Security Deposit*"
                    fullWidth
                    margin="normal"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Col>
                <Col md={12} className="monthly-rent-instruction">
                  <span>* In your local currency</span>
                </Col>
              </Row>
            </Paper>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
export default AddPropertyHeader;
