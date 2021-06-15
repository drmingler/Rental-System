import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {bathroomNumber, bedroomNumber, propertyTypes} from "../../helpers/PropertyConstants";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import {PlaceSuggestion} from "../CommonComponents/index";
import useGoogleSuggestions from "../../hooks/useGoogleSuggestions";

function AddPropertyHeader({ formHandlers }) {
  const {
    showActive,
    setActive,
    innerRef,
    placePredictions,
    getPlacePredictions
  } = useGoogleSuggestions();
  const {
    handleChange,
    setFieldValue,
    handleBlur,
    values,
    touched,
    errors
  } = formHandlers;
  return (
    <header className="add-property-header">
      <Container fluid={"sm"}>
        <Row>
          <Col xl={8} lg={7} md={12} className="property-form-container">
            <TextField
              name="propertyName"
              className="property-name"
              placeholder="Property Name"
              fullWidth
              margin="normal"
              onBlur={handleBlur}
              value={values.propertyName}
              onChange={handleChange}
              error={touched.propertyName && Boolean(errors.propertyName)}
              helperText={touched.propertyName && errors.propertyName}
            />

            <Row className="property-contact">
              <Col md={8}>
                <div className="address-text_box" ref={innerRef}>
                  <TextField
                    name="address"
                    fullWidth
                    label="Address"
                    margin="normal"
                    value={values.address}
                    onChange={evt => {
                      getPlacePredictions({ input: evt.target.value });
                      setFieldValue("address", evt.target.value);
                      setActive(true);
                    }}
                    error={touched.address && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
                  />
                  <PlaceSuggestion
                    placePredictions={placePredictions}
                    setActive={setActive}
                    showActive={showActive}
                    setValue={setFieldValue}
                  />
                </div>
              </Col>
              <Col md={4}>
                <TextField
                  name="unit"
                  type="number"
                  fullWidth
                  label="Unit# (optional)"
                  margin="normal"
                  onBlur={handleBlur}
                  value={values.unit}
                  onChange={handleChange}
                  error={touched.unit && Boolean(errors.unit)}
                  helperText={touched.unit && errors.unit}
                />
              </Col>
            </Row>

            <Row className="property-facilities">
              <Col md={3}>
                <TextField
                  select
                  fullWidth
                  name="propertyType"
                  label="Type"
                  margin="normal"
                  onBlur={handleBlur}
                  value={values.propertyType}
                  onChange={handleChange}
                  error={touched.propertyType && Boolean(errors.propertyType)}
                  helperText={touched.propertyType && errors.propertyType}
                >
                  {propertyTypes.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Col>
              <Col md={3}>
                <TextField
                  name="numberOfBedrooms"
                  select
                  fullWidth
                  label="Bedroom"
                  margin="normal"
                  onBlur={handleBlur}
                  value={values.numberOfBedrooms}
                  onChange={handleChange}
                  error={
                    touched.numberOfBedrooms && Boolean(errors.numberOfBedrooms)
                  }
                  helperText={
                    touched.numberOfBedrooms && errors.numberOfBedrooms
                  }
                >
                  {bedroomNumber.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Col>
              <Col md={3} xs={5}>
                <TextField
                  name="numberOfBathrooms"
                  select
                  fullWidth
                  label="Bath"
                  margin="normal"
                  onBlur={handleBlur}
                  value={values.numberOfBathrooms}
                  onChange={handleChange}
                  error={
                    touched.numberOfBathrooms &&
                    Boolean(errors.numberOfBathrooms)
                  }
                  helperText={
                    touched.numberOfBathrooms && errors.numberOfBathrooms
                  }
                >
                  {bathroomNumber.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Col>
              <Col md={{ span: 3, offset: 0 }} xs={{ span: 5, offset: 2 }}>
                <TextField
                  fullWidth
                  name="size"
                  label="SQFT"
                  margin="normal"
                  type="number"
                  onBlur={handleBlur}
                  value={values.size}
                  onChange={handleChange}
                  error={touched.size && Boolean(errors.size)}
                  helperText={touched.size && errors.size}
                />
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
                    name="monthlyRent"
                    label="Monthly Price*"
                    fullWidth
                    margin="normal"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    onBlur={handleBlur}
                    value={values.monthlyRent}
                    onChange={handleChange}
                    error={touched.monthlyRent && Boolean(errors.monthlyRent)}
                    helperText={touched.monthlyRent && errors.monthlyRent}
                  />
                </Col>
                <Col md={12}>
                  <TextField
                    name="securityDeposit"
                    label="Security Deposit*"
                    fullWidth
                    margin="normal"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    onBlur={handleBlur}
                    value={values.securityDeposit}
                    onChange={handleChange}
                    error={
                      touched.securityDeposit && Boolean(errors.securityDeposit)
                    }
                    helperText={
                      touched.securityDeposit && errors.securityDeposit
                    }
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
