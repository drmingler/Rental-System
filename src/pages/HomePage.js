import React from "react";
import {PerfectPlace} from "../components/CommonComponents/index";
import {Layout} from "../components/LayoutComponents/index";
import {AvailableCities, Cities, Header, ListingCategories, Steps} from "../components/HomepageComponents/index";

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
