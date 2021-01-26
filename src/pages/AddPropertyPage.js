import React, { useRef } from "react";
import Layout from "../components/Layout";
import ListImageUploader from "../components/ListingImageUploader";
import { Col, Container, Row } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { ReactComponent as AlertCircle } from "../assets/img/alert-circle.svg";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const AddPropertyPage = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [numberOfUploader, increaseNumberOfUploader] = React.useState(3);
  const ref = useRef();

  const checkUploads = () => {
    const uploadedImagesContainers = ref.current.querySelectorAll(
      ".listing-image"
    );

    // Check if all the uploader already have a background image
    const hasBackgroundImage = Array.from(uploadedImagesContainers).map(
      node => {
        let background = node.style.backgroundImage;
        return background !== 'url("")';
      }
    );

    // if all the uploader already have a background image add a new uploader
    let newNumberOfUploader = numberOfUploader + 1;
    !hasBackgroundImage.includes(false) &&
    increaseNumberOfUploader(newNumberOfUploader);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

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
    }
  ];

  return (
    <Layout fixed={true}>
      <header className="add-property-header">
        <Container fluid={"sm"}>
          <Row>
            <Col xl={8} lg={7} md={12} className="property-form-container">
              <form noValidate autoComplete="off">
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
                    <TextField
                      fullWidth
                      label="Unit# (optional)"
                      margin="normal"
                    />
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
                      label="Bed"
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
              </form>
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
      <section className="house-listing-section">
        <Container fluid="lg">
          <Row>
            <Col md={9}>
              <div className="listing-image-container">
                <Row ref={ref}>
                  {[...Array(numberOfUploader)].map((eachUploader, idx) => (
                    <Col xs={6} md={4} key={idx}>
                      <ListImageUploader uploadCallback={checkUploads} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
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
                    <Col
                      md={4}
                      lg={3}
                      xs={6}
                      className="listing-icon-container"
                    >
                      <div className="listing-icon">
                        <div className="svg-icon">
                          <AlertCircle />
                        </div>
                        <span>Dogs Allowed</span>
                      </div>
                    </Col>
                    <Col
                      md={4}
                      lg={3}
                      xs={6}
                      className="listing-icon-container"
                    >
                      <div className="listing-icon">
                        <div className="svg-icon">
                          <AlertCircle />
                        </div>
                        <span>Cats Allowed</span>
                      </div>
                    </Col>
                    <Col
                      md={4}
                      lg={3}
                      xs={6}
                      className="listing-icon-container"
                    >
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
      <section className="listing-amenities-section">
        <div className="listing-amenities-container">
          <Container fluid="lg">
            <Row>
              <Col md={9} className="listing-amenities">
                <Row>
                  <Col md={6} lg={6}>
                    <div className="amenities-header">
                      <h1 className="section-header">Amenities</h1>
                    </div>
                  </Col>
                  <Col
                    md={6}
                    lg={{ span: 5, offset: 1 }}
                    className="listing-icon-container"
                  >
                    <div className="listing-icon warning">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Mark what your place offers</span>
                    </div>
                  </Col>
                </Row>
                <ul className="row">
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Pool</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Garden</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Elevator</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Doorman</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Deck</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Washer/Dryer In Unit</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Gym</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Parking Spot</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Fireplace</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Air Conditioning</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Dishwasher</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Storage</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Wheelchair Accessible</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Hardwood Floors</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Balcony</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Furnished</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>View</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>High Rise</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Student Friendly</span>
                    </div>
                  </li>
                  <li className="col-6 listing-amenities-icon">
                    <div className="listing-icon">
                      <div className="svg-icon">
                        <AlertCircle />
                      </div>
                      <span>Utilities Included</span>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col md={3}>
                <Paper elevation={0} className="listing-image-instruction">
                  <span>
                    Check all amenities that your property has. Tenants like to
                    know what your place offers.
                  </span>
                  <div>
                    <a href="/">Got It</a>
                  </div>
                </Paper>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="post-listing-section">
        <Container fluid="lg">
          <Row>
            <Col md={4}>
              <div className="available-from">
                <h3 className="section-header">Available From</h3>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    placeholder="mm/dd/yyyy"
                    margin="normal"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
            </Col>
            <Col md={{ span: 3, offset: 5 }}>
              <Paper elevation={0} className="listing-image-instruction">
                <span>
                  Specify when your property will be available so tenants can
                  choose proper move-in dates.
                </span>
                <div>
                  <a href="/">Got it</a>
                </div>
              </Paper>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="post-listing-button-section">
        <Container fluid="lg">
          <Row>
            <Col md={{ span: 6, offset: 3 }} lg={{ span: 5, offset: 3 }}>
              <button className="listing-button">Save & Post</button>
              <div className="listing-terms">
                <span>
                  By clicking "Save & Post" you agree to <br /> our{" "}
                  <a href="/">Listing Requirements</a>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};
export default AddPropertyPage;
