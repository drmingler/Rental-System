import React from "react";
import {Col, Row} from "react-bootstrap";
import propertyImage2 from "../../assets/img/propertyImage2.jpeg";
import {ReactComponent as ChevronLeft} from "../../assets/img/chevron-left.svg";
import {ReactComponent as ChevronRight} from "../../assets/img/chevron-right.svg";
import {HouseCard} from "../CommonComponents/index";
import {addComma} from "../../helpers/utils";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

function Loading({ state }) {
  return (
    <Backdrop
      open={Boolean(state)}
      style={{ zIndex: 10, backgroundColor: "white" }}
    >
      <CircularProgress
        className="button-spinner"
        style={{ color: "#7c54c1" }}
      />
    </Backdrop>
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

const HouseScrollArea = ({ properties, isLoading }) => {
  return (
    <Row className="house-scroll-area">
      <div className="custom-backdrop">
        <Loading state={isLoading} />
      </div>
      {properties.map(property => (
        <Col lg={12} xl={6} key={property.id}>
          <HouseCard
            id={property.id}
            image={property ? property.propertyImage[0].image : propertyImage2}
            propertyName={property.propertyName}
            address={property && property.propertyAddress.address}
            price={addComma(property.monthlyRent)}
            bed={property.numberOfBedrooms}
            bath={property.numberOfBathrooms}
            size={property.size}
          />
        </Col>
      ))}
      <PageControls />
    </Row>
  );
};
export default HouseScrollArea;
