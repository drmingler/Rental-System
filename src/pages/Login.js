import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {loginInitialValues, loginValidator} from "../validators/formValidators";
import Paper from "@material-ui/core/Paper";
import {ReactComponent as FBIcon} from "../assets/img/fb.svg";
import {ReactComponent as GoogleIcon} from "../assets/img/google.svg";
import TextField from "@material-ui/core/TextField";
import {useForm} from "../hooks/useForm";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {handleLogin} from "../store/authSlice";
import {AuthLayout, SocialAuthButton} from "../components/AuthPageComponents/index";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);

  const login = loginDetails => {
    dispatch(handleLogin(loginDetails));
    if (isLoading === false && error === null) {
      history.push("/");
    }
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    touched,
    errors
  } = useForm(login, loginInitialValues, loginValidator);

  return (
    <AuthLayout>
      <Container fluid={"lg"}>
        <Row className="align-item-center justify-content-center">
          <Col md={8} xl={5} className="auth-wrapper">
            <h1>Welcome Back</h1>
            <Paper elevation={1} className="auth">
              <form onSubmit={handleSubmit}>
                <div className="auth-form">
                  <Row>
                    <SocialAuthButton>
                      <FBIcon />
                      <span>Log in with Facebook</span>
                    </SocialAuthButton>
                    <SocialAuthButton>
                      <GoogleIcon />
                      <span>Log in with Google</span>
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
                        name="email"
                        label="Email"
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
                        type="password"
                        label="Password"
                        fullWidth
                        margin="normal"
                        onBlur={handleBlur}
                        value={values.password}
                        onChange={handleChange}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                      />
                      <div className="forgot-password">
                        <a href="/">Forgot your password?</a>
                      </div>
                    </Col>
                  </Row>
                </div>
                <button className="auth-button" type="submit">
                  {isLoading && (
                    <CircularProgress className="button-spinner" size={30} />
                  )}
                  {!isLoading && <span>Login</span>}
                </button>
              </form>
            </Paper>
          </Col>
          <Col md={12} className="already-signed-up">
            <span>
              Don’t have an account yet? <a href="/">Sign up</a>
            </span>
          </Col>
        </Row>
      </Container>
      <div className="auth-footer">
        <span>
          <a href="/">Terms of Use </a>|<a href="/"> Privacy Policy</a>
        </span>
      </div>
    </AuthLayout>
  );
};
export default Login;
