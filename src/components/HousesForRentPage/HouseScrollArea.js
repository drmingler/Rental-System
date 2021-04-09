import React from "react";
import {Col, Row} from "react-bootstrap";
import Berlin from "../../assets/img/Berlin.webp";
import {ReactComponent as ChevronLeft} from "../../assets/img/chevron-left.svg";
import {ReactComponent as ChevronRight} from "../../assets/img/chevron-right.svg";
import CircularProgress from "@material-ui/core/CircularProgress";
import {HouseCard} from "../CommonComponents/index";


function Loading() {
  return (
    <Col xl={12} className="loading">
      <Row className="justify-content-center">
        <CircularProgress className="colour" />
      </Row>
    </Col>
  );
}

function PageControls() {
  return (
    <Col sm={12} className="page-control">
      <Row>
        <div className="prev-button px-3">
          <button className="page-control-btn">
            <ChevronLeft />
            <span>Previous</span>
          </button>
        </div>
        <div className="next-button px-3">
          <button className="page-control-btn">
            <span>Next</span>
            <ChevronRight />
          </button>
        </div>
      </Row>
    </Col>
  );
}

const HouseScrollArea = () => {
  return (
    <Row className="house-scroll-area">
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <Col lg={12} xl={6}>
        <HouseCard image={Berlin} />
      </Col>
      <PageControls />
    </Row>
  );
};
export default HouseScrollArea;
