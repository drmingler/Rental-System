import React from "react";
import Layout from "../components/Layout";
import {
  HouseListingSection,
  AddPropertyHeader,
  ListingAmenitySection,
  AvailabilityDateSection,
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
