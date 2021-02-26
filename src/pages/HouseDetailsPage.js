import React from "react";
import MobileNavbar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import {
  Header,
  HouseDescriptionSection,
  HouseImagesSection,
  HouseAmenitiesSection,
  ContactLandlordSection,
  SimilarPropertiesSection
} from "../components/HouseDetailsPage/index";
import Paper from "@material-ui/core/Paper";
import { ReactComponent as ArrowDownRight } from "../assets/img/arrow-right-circle.svg";

const HouseDetailsPage = () => {
  return (
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
        <HouseImagesSection />
        <HouseDescriptionSection />
        <HouseAmenitiesSection />
        <ContactLandlordSection />
      </div>
      <SimilarPropertiesSection />
    </Layout>
  );
};
export default HouseDetailsPage;
