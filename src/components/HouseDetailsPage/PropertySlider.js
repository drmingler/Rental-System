import React from "react";
import { ReactComponent as Cancel } from "../../assets/img/x-slim.svg";
import { ReactComponent as ChevronLeft } from "../../assets/img/chevron-left-slim.svg";
import { ReactComponent as ChevronRight } from "../../assets/img/chevron-right-slim.svg";
import { Col, Container, Row } from "react-bootstrap";
import { useSwipeable } from "react-swipeable";

const PropertySlider = ({ sliderControls, slideImage }) => {
  const {
    showSlide,
    handleChangePicture,
    currentIndex,
    ImageIndex,
    setSlide
  } = sliderControls;

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleChangePicture(-1),
    onSwipedRight: () => handleChangePicture(1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div
      className={`property-slides-container  ${showSlide && "scale"}`}
      {...swipeHandlers}
    >
      <div className="cancel" onClick={() => setSlide(false)}>
        <Cancel />
      </div>
      <div className="left" onClick={() => handleChangePicture(-1)}>
        <ChevronLeft />
      </div>
      <div className="right" onClick={() => handleChangePicture(1)}>
        <ChevronRight />
      </div>
      <div className="picture-number">
        <div>
          <span className="large-font">{currentIndex + 1}</span>
          <span className="small-font">&nbsp;/&nbsp;{ImageIndex + 1}</span>
        </div>
      </div>
      <div>
        <Container>
          <Row>
            <Col sm={12}>
              <div className="flex-image">
                <img src={slideImage[currentIndex]} alt={"image1"} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default PropertySlider;
