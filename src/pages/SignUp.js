import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {useForm} from "../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {handleCreateUser} from "../store/userSlice";
import {Link, useHistory} from "react-router-dom";
import {ReactComponent as FBIcon} from "../assets/img/fb.svg";
import {ReactComponent as GoogleIcon} from "../assets/img/google.svg";
import {AuthLayout, SocialAuthButton} from "../components/AuthPageComponents/index";
import {regInitialValues, registrationValidator} from "../validators/formValidators";
import CircularProgress from "@material-ui/core/CircularProgress";

const SignUp = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.users);

  const signUp = signUpData => {
    dispatch(handleCreateUser(signUpData));
    if (isLoading === false && error === null) {
      history.push("/login");
    }
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    touched,
    errors
  } = useForm(signUp, regInitialValues, registrationValidator);

  return (
    <AuthLayout>
      <Container fluid={"lg"}>
        <Row className="align-item-center justify-content-center">
          <Col md={8} xl={5} className="auth-wrapper">
            <h1>Sign Up</h1>
            <Paper elevation={1} className="auth">
              <form onSubmit={handleSubmit}>
                <div className="auth-form">
                  <Row>
                    <SocialAuthButton>
                      <FBIcon />
                      <span>Sign up with Facebook</span>
                    </SocialAuthButton>
                    <SocialAuthButton>
                      <GoogleIcon />
                      <span>Sign up with Google</span>
                    </SocialAuthButton>
                    <Col md={12}>
                      <div className="with-email">
                        <span>or with email</span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="auth-inputs">
                    <Col md={12}>
                      <TextField
                        name="firstName"
                        label="Enter First Name"
                        fullWidth
                        margin="normal"
                        onBlur={handleBlur}
                        value={values.firstName}
                        onChange={handleChange}
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </Col>
                    <Col md={12}>
                      <TextField
                        name="lastName"
                        label="Enter Last Name"
                        fullWidth
                        margin="normal"
                        onBlur={handleBlur}
                        value={values.lastName}
                        onChange={handleChange}
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </Col>
                    <Col md={12}>
                      <TextField
                        name="email"
                        label="Enter Email"
                        fullWidth
                        margin="normal"
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Col>
                    <Col md={12}>
                      <TextField
                        name="password"
                        label="Password"
                        fullWidth
                        margin="normal"
                        type="password"
                        onBlur={handleBlur}
                        value={values.password}
                        onChange={handleChange}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    </Col>
                  </Row>
                </div>
                <button className="auth-button" type="submit">
                  {isLoading && (
                    <CircularProgress className="button-spinner" size={30} />
                  )}
                  {!isLoading && <span>Sign Up</span>}
                </button>
              </form>
            </Paper>
          </Col>
          <Col md={12} className="already-signed-up">
            <span>
              Already have Rentberry account? <Link to="/login">Log in</Link>
            </span>
          </Col>
        </Row>
      </Container>
      <div className="auth-footer">
        <span>
          By signing up you agree to Rentberry’s <a href="/">Terms of Use </a>
          and <a href="/">Privacy Policy</a>
        </span>
      </div>
    </AuthLayout>
  );
};
export default SignUp;
