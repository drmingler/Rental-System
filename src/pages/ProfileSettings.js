import React, {useEffect} from "react";
import {Layout} from "../components/LayoutComponents/index";
import {Col, Container, Row} from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import countries from "../helpers/CountriesList";
import MenuItem from "@material-ui/core/MenuItem";
import useImageUploader from "../hooks/useImageUploader";
import {useForm} from "../hooks/useForm";
import {updateDetailsValidator} from "../validators/formValidators";
import {useDispatch, useSelector} from "react-redux";
import {handleUpdateUser} from "../store/userSlice";
import {toDate} from "../helpers/utils";

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const { avatar, ...currentUser } = useSelector(
    state => state.users.currentUser
  );
  const {
    handleImageUpload,
    backgroundImage,
    showImage,
    setBackgroundImage
  } = useImageUploader();

  useEffect(() => {
    setBackgroundImage(avatar);
  }, [avatar, setBackgroundImage]);

  const updateProfile = profileData => {
    const { avatar, ...payload } = profileData;
    let data = new FormData();

    avatar && data.append("avatar", avatar);
    Object.keys(payload).forEach(key => data.append(key, payload[key]));
    dispatch(handleUpdateUser(currentUser.id, data));
  };

  const {
    handleChange,
    handleSubmit,
    setFieldValue,
    handleBlur,
    values,
    touched,
    errors
  } = useForm(updateProfile, currentUser, updateDetailsValidator);

  return (
    <Layout fixed={true}>
      <section className="profile-page">
        <Container>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col md={2}>
                <div className="profile-image-container">
                  <div
                    className="name-initial-wrapper"
                    style={{
                      backgroundImage: `url(${
                        showImage ? backgroundImage : avatar
                      })`
                    }}
                  >
                    {!showImage && !avatar && (
                      <h2>{values.lastName && values.lastName[0]}</h2>
                    )}
                  </div>
                  <div className="change-photo">
                    <span>Change photo</span>
                  </div>
                  <input
                    name="avatar"
                    accept="image/*"
                    multiple
                    type="file"
                    className="upload-file-input"
                    onChange={event => {
                      handleImageUpload(event);
                      setFieldValue("avatar", event.currentTarget.files[0]);
                    }}
                  />
                </div>
              </Col>
              <Col md={{ span: 4, offset: 1 }}>
                <div className="profile-form">
                  <TextField
                    name="firstName"
                    label="First Name"
                    fullWidth
                    margin="normal"
                    onBlur={handleBlur}
                    value={values.firstName}
                    onChange={handleChange}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                  <TextField
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    margin="normal"
                    onBlur={handleBlur}
                    value={values.lastName}
                    onChange={handleChange}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                  <TextField
                    name="email"
                    label="Email"
                    fullWidth
                    disabled
                    margin="normal"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <div className="text-box-wrapper">
                    <h3 className="text-box-header">Date of Birth</h3>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        name="birthDate"
                        fullWidth
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        placeholder="Date of birth"
                        margin="normal"
                        onBlur={handleBlur}
                        value={values.birthDate}
                        onChange={date => {
                          setFieldValue("birthDate", toDate(date));
                        }}
                        KeyboardButtonProps={{
                          "aria-label": "change date"
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                  <div className="text-box-wrapper">
                    <h3 className="text-box-header">Phone Number</h3>
                    <TextField
                      name="phoneNumber"
                      label="Phone Number"
                      fullWidth
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                      onChange={handleChange}
                      error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                  </div>
                  <div className="text-box-wrapper">
                    <FormControl component="fieldset">
                      <h3 className="text-box-header">Your Gender</h3>
                      <RadioGroup
                        aria-label="gender"
                        name="gender"
                        onBlur={handleBlur}
                        value={values.gender}
                        onChange={handleChange}
                        error={
                          touched.gender && Boolean(errors.gender).toString()
                        }
                      >
                        <FormControlLabel
                          value="FEMALE"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="MALE"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <TextField
                    name="address"
                    label="Address"
                    multiline={true}
                    fullWidth
                    margin="normal"
                    onBlur={handleBlur}
                    value={values.address}
                    onChange={handleChange}
                    error={touched.address && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
                  />
                  <TextField
                    select
                    fullWidth
                    name="nationality"
                    label="Country"
                    margin="normal"
                    onBlur={handleBlur}
                    value={values.nationality || ""}
                    onChange={handleChange}
                    error={touched.nationality && Boolean(errors.nationality)}
                    helperText={touched.nationality && errors.nationality}
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
                        aria-label="occupation"
                        name="occupation"
                        onBlur={handleBlur}
                        value={values.occupation}
                        onChange={handleChange}
                        error={
                          touched.occupation &&
                          Boolean(errors.occupation).toString()
                        }
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
                          value="employer"
                          control={<Radio />}
                          label="Employer"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="text-box-wrapper">
                    <h3 className="text-box-header">About Me</h3>
                    <TextField
                      name="bio"
                      fullWidth
                      multiline={true}
                      placeholder={"Tell a bit about yourself (Optional)"}
                      onBlur={handleBlur}
                      value={values.bio}
                      onChange={handleChange}
                      error={touched.bio && Boolean(errors.bio)}
                      helperText={touched.bio && errors.bio}
                    />
                  </div>
                  <div className="text-box-wrapper">
                    <button className="save-button" type="submit">
                      Save & Post
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        </Container>
      </section>
    </Layout>
  );
};
export default ProfileSettings;
