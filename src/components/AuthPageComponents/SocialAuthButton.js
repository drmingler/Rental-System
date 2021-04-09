import {Col} from "react-bootstrap";
import React from "react";

const SocialAuthButton = ({ children }) => {
    return (
        <Col md={12}>
            <button className="social-auth-btn">{children}</button>
        </Col>
    );
};
export default SocialAuthButton;
