import {Col} from "react-bootstrap";
import React from "react";

const TipsList = ({ content, image }) => {
    return (
        <Col lg={4} md={12}>
            <div className="tips-actions">
                {image}
                <span className="tips-text">{content}</span>
            </div>
        </Col>
    );
};

export default TipsList;
