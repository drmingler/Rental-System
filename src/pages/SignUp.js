import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as Cancel } from "../assets/img/x-slim.svg";
import Paper from "@material-ui/core/Paper";
import { ReactComponent as FBIcon } from "../assets/img/fb.svg";
import { ReactComponent as GoogleIcon } from "../assets/img/google.svg";
import TextField from "@material-ui/core/TextField";

const SocialAuthButton = ({ children }) => {
  return (
    <Col md={12}>
      <button className="social-auth-btn">{children}</button>
    </Col>
  );
};
const SignUp = () => {
  return (
    <section className="auth-page">
        <div className="cancel-button">
            <Cancel />
        </div>
      <Container className="sign-up-container" fluid={"lg"}>
        <Row className="align-item-center justify-content-center">
          <Col md={7} xl={5} className="sign-up-wrapper">
            <h1>Sign Up</h1>
            <Paper elevation={1} className="sign-up">
              <form>
                <div className="sign-up-form">
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
                  <Row className="sign-up-inputs">
                    <Col md={12}>
                      <TextField
                        label="Enter First Name"
                        fullWidth
                        margin="normal"
                      />
                    </Col>
                    <Col md={12}>
                      <TextField
                        label="Enter Last Name"
                        fullWidth
                        margin="normal"
                      />
                    </Col>
                    <Col md={12}>
                      <TextField
                        label="Enter Email"
                        fullWidth
                        margin="normal"
                      />
                    </Col>
                    <Col md={12}>
                      <TextField label="Password" fullWidth margin="normal" />
                    </Col>
                  </Row>
                </div>
                <button className="sign-up-button">
                  <span>Sign Up</span>
                </button>
              </form>
            </Paper>
          </Col>
          <Col md={12} className="already-signed-up">
            <span>
              Already have Rentberry account? <a href="/">Log in</a>
            </span>
          </Col>
        </Row>
      </Container>
      <div className="sign-up-footer">
        <span>
          By signing up you agree to Rentberry’s <a href="/">Terms of Use </a>
          and <a href="/">Privacy Policy</a>
        </span>
      </div>
    </section>
  );
};
export default SignUp;
