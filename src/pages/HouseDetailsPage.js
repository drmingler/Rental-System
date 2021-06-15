import React, {useEffect} from "react";
import {Layout} from "../components/LayoutComponents/index";

import {
  ContactLandlordSection,
  Header,
  HouseAddressMobile,
  HouseAmenitiesSection,
  HouseDescriptionSection,
  HouseImagesSection,
  HowToRentProperty,
  MobileHeader,
  PropertySlider
} from "../components/HouseDetailsPageComponents/index";
import Paper from "@material-ui/core/Paper";
import {ReactComponent as ArrowDownRight} from "../assets/img/arrow-right-circle.svg";
import {ImageSlideContext, usePropertySlide} from "../hooks/usePropertySlides";
import {useDispatch, useSelector} from "react-redux";
import {handleGetProperty} from "../store/propertySlice";
import {useParams} from "react-router-dom";
import {addComma} from "../helpers/utils";
import BackDropLoadingFull from "../components/CommonComponents/BackDropLoadingFull";

const HouseDetailsPage = () => {
  const dispatch = useDispatch();
  let { propertyId } = useParams();
  const { isLoading, currentProperty } = useSelector(state => state.property);

  let propertyImages = currentProperty.propertyImage
    ? currentProperty.propertyImage.map(imageDict => imageDict.image)
    : [];

  const slideControls = usePropertySlide(propertyImages);
  const { setSlide } = slideControls;

  useEffect(() => {
    dispatch(handleGetProperty(propertyId));
  }, [dispatch, propertyId]);

  return (
    <div className="property-page-container">
      {<BackDropLoadingFull state={isLoading} />}
      <PropertySlider
        sliderControls={slideControls}
        slideImage={propertyImages}
      />
      <Layout fixed={true}>
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
                    <span>{`₦${addComma(currentProperty.monthlyRent)}`}</span>
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
          <Header
            propertyImages={propertyImages}
            currentProperty={currentProperty}
          />
          <MobileHeader
            sliderControls={slideControls}
            slideImage={propertyImages}
          />
          <HouseAddressMobile />
          <ImageSlideContext.Provider value={{ setSlide }}>
            <HouseImagesSection propertyImages={propertyImages} />
          </ImageSlideContext.Provider>
          <HouseDescriptionSection
            propertyDescription={currentProperty.listingDescription || ""}
          />
          <HouseAmenitiesSection amenities={currentProperty.propertyAmenities || {}}/>
          <HowToRentProperty />
          <ContactLandlordSection landlordDetails={currentProperty.landlord} />
        </div>
        {/*<SimilarPropertiesSection />*/}
        <div className="sticky-apply-mobile">
          <button className="apply-button-mobile">
            <span>{`Apply for ${currentProperty.monthlyRent}`}</span>
            <span>/month</span>
          </button>
        </div>
      </Layout>
    </div>
  );
};
export default HouseDetailsPage;
