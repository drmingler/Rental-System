import React from "react";
import {Layout} from "../components/LayoutComponents/index";
import {
  AddPropertyHeader,
  AvailabilityDateSection,
  HouseListingSection,
  ListingAmenitySection,
  ListingButtonSection,
  PropertyDocumentsSection
} from "../components/AddPropertyPageComponents/index";

const AddPropertyPage = () => {
  return (
    <Layout fixed={true}>
      <form>
        <AddPropertyHeader/>
        <HouseListingSection/>
        <ListingAmenitySection/>
        <PropertyDocumentsSection/>
        <AvailabilityDateSection/>
        <ListingButtonSection/>
      </form>
    </Layout>
  );
};
export default AddPropertyPage;
