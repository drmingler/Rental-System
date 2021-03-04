import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MobileNavbar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import { useSwipeable } from "react-swipeable";

import {
  ContactLandlordSection,
  Header,
  HouseAmenitiesSection,
  HouseDescriptionSection,
  HouseImagesSection,
  HowToRentProperty,
  MobileHeader,
  SimilarPropertiesSection,
  HouseAddressMobile
} from "../components/HouseDetailsPage/index";
import Paper from "@material-ui/core/Paper";
import sliderImage1 from "../assets/img/slider-image.jpg";
import sliderImage2 from "../assets/img/sliderImage2.jpg";
import sliderImage3 from "../assets/img/slideImage3.jpg";

import { ReactComponent as ArrowDownRight } from "../assets/img/arrow-right-circle.svg";
import { ReactComponent as Cancel } from "../assets/img/x-slim.svg";
import { ReactComponent as ChevronLeft } from "../assets/img/chevron-left-slim.svg";
import { ReactComponent as ChevronRight } from "../assets/img/chevron-right-slim.svg";
import  {usePropertySlide, ImageSlideContext} from "../hooks/usePropertySlides";

const MockImages = [sliderImage1, sliderImage2, sliderImage3];

const HouseDetailsPage = () => {
  const {
    showSlide,
    setSlide,
    handleChangePicture,
    currentIndex,
    ImageIndex,
    swipeHandlers,
  } = usePropertySlide(MockImages);

  return (
    <div className="property-page-container">
      <div className={`property-slides-container  ${showSlide && "scale"}`}>
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
          <Container {...swipeHandlers}>
            <Row>
              <Col sm={12}>
                <div className="flex-image">
                  <img src={MockImages[currentIndex]} alt={"image1"} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Layout>
        <MobileNavbar />
        <NavBar fixed={true} />
        <div className="sticky-container">
          <div className="sticky-apply-container">
            <div className="sticky-apply sticky-active">
              <Paper elevation={1} className="apply-for-property">
                <div className="property-monthly-price">
                  <div className="monthly-price-header">
                    <span>Monthly Price</span>
                  </div>
                  <div className="price">
                    <ArrowDownRight className="arrow-icon" />
                    <span>$1,500</span>
                  </div>
                </div>
                <div className="property-availability">
                  <span className="available">Available:</span>
                  <span className="right-now">Right Now</span>
                </div>
                <button className="apply-for-property-button">Apply</button>
              </Paper>
            </div>
          </div>
          <Header />
          <MobileHeader />
          <HouseAddressMobile />
          <ImageSlideContext.Provider value={{ setSlide }}>
            <HouseImagesSection />
          </ImageSlideContext.Provider>
          <HouseDescriptionSection />
          <HouseAmenitiesSection />
          <HowToRentProperty />
          <ContactLandlordSection />
        </div>
        <SimilarPropertiesSection />
      </Layout>
    </div>
  );
};
export default HouseDetailsPage;
