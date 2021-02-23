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

const HouseDetailsPage = () => {
  return (
    <Layout>
      <MobileNavbar />
      <NavBar fixed={true} />
      <Header />
      <HouseImagesSection />
      <HouseDescriptionSection />
      <HouseAmenitiesSection />
      <ContactLandlordSection />
      <SimilarPropertiesSection />
    </Layout>
  );
};
export default HouseDetailsPage;
