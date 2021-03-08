import React from "react";
import { ReactComponent as Cancel } from "../assets/img/x-slim.svg";
import { Col, Container, Row } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const PasswordReset = () => {
  return (
    <section className="auth-page">
      <div className="cancel-button">
        <Cancel />
      </div>
      <Container fluid={"lg"}>
        <Row className="align-item-center justify-content-center">
          <Col md={8} xl={5} className="auth-wrapper">
            <h1>Reset Password</h1>
            <Paper elevation={1} className="auth">
              <form>
                <div className="auth-form">
                  <div className="password-reset-text">
                    <span> We’ll send you new password</span>
                  </div>
                  <Row className="auth-inputs">
                    <Col md={12}>
                      <TextField label="Email" fullWidth margin="normal" />
                    </Col>
                  </Row>
                </div>
                <button className="auth-button">
                  <span>Send Password</span>
                </button>
              </form>
            </Paper>
          </Col>
          <Col md={12} className="already-signed-up">
            <span>
              Back to <a href="/"> Log in</a>
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
export default PasswordReset;
