import React from "react";
import { Col } from "react-bootstrap";

const Switch = ({showActive, setActive}) => {
  return (
    <div className="switch">
      <Col md={10} lg={7} xl={6} sm={12}>
        <div className="switch-btn">
          <button
            className={`${showActive && "active"}`}
            onClick={() => setActive(true)}
          >
            <span>For tenants</span>
          </button>
          <button
            className={`${!showActive && "active"}`}
            onClick={() => setActive(false)}
          >
            <span>For landlords</span>
          </button>
        </div>
      </Col>
    </div>
  );
};
export default Switch;
