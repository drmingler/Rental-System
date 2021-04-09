import React from "react";
import {Layout} from "../components/LayoutComponents/index";
import {
  AddPropertyHeader,
  AvailabilityDateSection,
  HouseListingSection,
  ListingAmenitySection,
  ListingButtonSection
} from "../components/AddPropertyPageComponents/index";

const AddPropertyPage = () => {
  return (
    <Layout fixed={true}>
      <form>
        <AddPropertyHeader />
        <HouseListingSection />
        <ListingAmenitySection />
        <AvailabilityDateSection />
        <ListingButtonSection />
      </form>
    </Layout>
  );
};
export default AddPropertyPage;
