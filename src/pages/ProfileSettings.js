import React from "react";
import Layout from "../components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import countries from "../constants/CountriesList";
import MenuItem from "@material-ui/core/MenuItem";

const ProfileSettings = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <Layout fixed={true}>
      <section className="profile-page">
        <Container>
          <Row>
            <Col md={2}>
              <div className="profile-image-container">
                <div className="name-initial-wrapper">
                  <h2>O</h2>
                </div>
                <div className="change-photo">
                  <span>Change photo</span>
                </div>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 1 }}>
              <form className="profile-form">
                <TextField label="First Name" fullWidth margin="normal" />
                <TextField label="Last Name" fullWidth margin="normal" />
                <TextField label="Email" fullWidth margin="normal" />
                <div className="text-box-wrapper">
                  <h3 className="text-box-header">Date of Birth</h3>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      fullWidth
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      placeholder="Date of birth"
                      margin="normal"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
                <div className="text-box-wrapper">
                  <h3 className="text-box-header">Phone Number</h3>
                  <TextField label="Phone Number" fullWidth />
                </div>
                <div className="text-box-wrapper">
                  <FormControl component="fieldset">
                    <h3 className="text-box-header">Your Gender</h3>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <TextField
                  label="City of residence"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  select
                  fullWidth
                  label="Country"
                  margin="normal"
                  // value={currency}
                  // onChange={handleChange}
                >
                  {countries.map(option => (
                    <MenuItem key={option.label} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <div className="text-box-wrapper">
                  <FormControl component="fieldset">
                    <h3 className="text-box-header">Your Occupation</h3>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="student"
                        control={<Radio />}
                        label="Student"
                      />
                      <FormControlLabel
                        value="worker"
                        control={<Radio />}
                        label="Worker"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="text-box-wrapper">
                  <h3 className="text-box-header">About Me</h3>
                  <TextField
                    label="About Me (Optional)"
                    fullWidth
                    multiline
                    placeholder={"Tell a bit about yourself"}
                  />
                </div>
                <div className="text-box-wrapper">
                  <button className="save-button">Save & Post</button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};
export default ProfileSettings;
