import React from "react";
import {Col, Row} from "react-bootstrap";
import Berlin from "../../assets/img/Berlin.webp";
import HouseImage from "../../assets/img/property-image-1.jpg";
import HouseImage2 from "../../assets/img/property-image-3.jpg";
import HouseImage3 from "../../assets/img/slideImage3.jpg";
import propertyImage1 from "../../assets/img/propertyImage1.jpeg";
import propertyImage2 from "../../assets/img/propertyImage2.jpeg";
import propertyImage3 from "../../assets/img/propertyImage3.jpeg";
import {ReactComponent as ChevronLeft} from "../../assets/img/chevron-left.svg";
import {ReactComponent as ChevronRight} from "../../assets/img/chevron-right.svg";
// import CircularProgress from "@material-ui/core/CircularProgress";
import {HouseCard} from "../CommonComponents/index";

// function Loading() {
//   return (
//     <Col xl={12} className="loading">
//       <Row className="justify-content-center">
//         <CircularProgress className="colour" />
//       </Row>
//     </Col>
//   );
// }

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
              <HouseCard
                  image={propertyImage2}
                  propertyName={"Oyedotun"}
                  address={
                      "28b Jaiye Oyedotun Street, Magodo Gra, Kosofe Lga, Lagos, Nigeria"
                  }
                  price={20000}
                  bed={2}
                  bath={1}
                  size={1000}
              />
          </Col>
          <Col lg={12} xl={6}>
              <HouseCard
                  image={propertyImage1}
                  propertyName={"Johnson Street"}
                  address={"Km 34, Ibeju Lekki, Lagos, Nigeria"}
                  price={55000}
                  bed={1}
                  bath={1}
                  size={625}
              />
          </Col>
          <Col lg={12} xl={6}>
              <HouseCard
                  image={propertyImage3}
                  propertyName={"Unity Estate"}
                  address={"10, Unity Estate Ojokoro, Agric"}
                  price={35400}
                  bed={2}
                  bath={1}
                  size={700}
              />
          </Col>
          <Col lg={12} xl={6}>
              <HouseCard
                  image={HouseImage}
                  propertyName={"Utako Street"}
                  address={"W/S75,Utako Ultra Modern Market"}
                  price={42000}
                  bed={1}
                  bath={1}
                  size={550}
              />
          </Col>
          <Col lg={12} xl={6}>
              <HouseCard
                  image={HouseImage3}
                  propertyName={"Unity Estate"}
                  address={"10, Unity Estate Ojokoro, Agric"}
                  price={65000}
                  bed={1}
                  bath={1}
                  size={625}
              />
          </Col>
          <Col lg={12} xl={6}>
              <HouseCard
                  image={HouseImage2}
                  propertyName={"Johnson Street"}
                  address={"Km 34, Ibeju Lekki, Lagos, Nigeria"}
                  price={101000}
                  bed={1}
                  bath={1}
                  size={625}
              />
          </Col>
          <Col lg={12} xl={6}>
              <HouseCard image={Berlin}/>
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
