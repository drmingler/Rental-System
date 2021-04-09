import React from "react";
import Header from "../components/Header";
import Cities from "../components/Cities";
import Steps from "../components/Steps";
import PerfectPlace from "../components/PerfectPlace";
import AvailableCities from "../components/AvailableCities";
import ListingCategories from "../components/ListingCategories";
import Layout from "../components/Layout/Layout";

function HomePage() {
  return (
      <Layout>
        <Header />
        <Cities />
        <Steps />
        <PerfectPlace />
        <AvailableCities />
        <ListingCategories />
      </Layout>
  );
}

export default HomePage;
