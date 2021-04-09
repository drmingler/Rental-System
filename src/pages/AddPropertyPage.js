import React from "react";
import Layout from "../components/Layout/Layout";
import {
  AddPropertyHeader,
  AvailabilityDateSection,
  HouseListingSection,
  ListingAmenitySection,
  ListingButtonSection
} from "../components/AddPropertyPage/index";

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
