import React from "react";
import {Col, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import {ReactComponent as PlusIcon} from "../../assets/img/plus-icon.svg";
import {useHistory} from "react-router-dom";

const AddPropertySection = () => {
  let history = useHistory();
  return (
    <Row>
      <Col md={4}>
        <Paper elevation={0} className="add-property-wrapper" onClick={()=>history.push("/list")}>
          <div className="plus-icon-wrapper">
            <PlusIcon />
          </div>
          <span className="add-property-text">Add property</span>
          <div className="rent-place-faster">
            <span>Rent your place faster!</span>
          </div>
        </Paper>
      </Col>
      <Col md={8} className="add-description-wrapper">
        <div className="add-property-description">
          <h1 className="heading">Let’s start!</h1>
          <span className="text">
            Add your properties and attract quality tenants.
          </span>
        </div>
      </Col>
    </Row>
  );
};
export default AddPropertySection;
