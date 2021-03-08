import React from "react";
import { ReactComponent as Cancel } from "../assets/img/x-slim.svg";
import { Col, Container, Row } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import { ReactComponent as FBIcon } from "../assets/img/fb.svg";
import { ReactComponent as GoogleIcon } from "../assets/img/google.svg";
import TextField from "@material-ui/core/TextField";
import { SocialAuthButton } from "../components/AuthPages/index";

const Login = () => {
  return (
    <section className="auth-page">
      <div className="cancel-button">
        <Cancel />
      </div>
      <Container fluid={"lg"}>
        <Row className="align-item-center justify-content-center">
          <Col md={8} xl={5} className="auth-wrapper">
            <h1>Login</h1>
            <Paper elevation={1} className="auth">
              <form>
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
                      <TextField label="Email" fullWidth margin="normal" />
                    </Col>
                    <Col md={12}>
                      <TextField label="Password" fullWidth margin="normal" />
                      <div className="forgot-password">
                        <a href="/">Forgot your password?</a>
                      </div>
                    </Col>
                  </Row>
                </div>
                <button className="auth-button">
                  <span>Login</span>
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
    </section>
  );
};
export default Login;
