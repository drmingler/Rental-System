import React from "react";
import MobileNavbar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";

import {
  ContactLandlordSection,
  Header,
  HouseAmenitiesSection,
  HouseDescriptionSection,
  HouseImagesSection,
  HowToRentProperty,
  MobileHeader,
  SimilarPropertiesSection,
  HouseAddressMobile,
  PropertySlider
} from "../components/HouseDetailsPage/index";
import Paper from "@material-ui/core/Paper";
import sliderImage1 from "../assets/img/slider-image.jpg";
import sliderImage2 from "../assets/img/sliderImage2.jpg";
import sliderImage3 from "../assets/img/slideImage3.jpg";
import { ReactComponent as ArrowDownRight } from "../assets/img/arrow-right-circle.svg";
import {
  usePropertySlide,
  ImageSlideContext
} from "../hooks/usePropertySlides";

const MockImages = [sliderImage1, sliderImage2, sliderImage3];

const HouseDetailsPage = () => {
  const slideControls = usePropertySlide(MockImages);
  const { setSlide } = slideControls;

  return (
    <div className="property-page-container">
      <PropertySlider sliderControls={slideControls} slideImage={MockImages} />
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
