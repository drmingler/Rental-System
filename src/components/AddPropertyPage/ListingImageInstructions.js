import React from "react";
import Paper from "@material-ui/core/Paper";
import { Col } from "react-bootstrap";

const ListingImageInstructions = ({ children, offset }) => {
  return (
    <Col md={{ span: 3, offset: offset ? 1 : 0 }}>
      <Paper elevation={0} className="listing-image-instruction">
        <span>{children}</span>
        <div>
          <a href="/">Got It</a>
        </div>
      </Paper>
    </Col>
  );
};
export default ListingImageInstructions;
