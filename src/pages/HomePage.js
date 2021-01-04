import React, {Fragment} from "react";
import Header from "../components/Header";
import Cities from "../components/Cities";
import Steps from "../components/Steps";
import PerfectPlace from "../components/PerfectPlace";
import AvailableCities from "../components/AvailableCities";
import ListingCategories from "../components/ListingCategories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MobileNavbar from "../components/MobileNavBar";

function HomePage() {
  return (
    <Fragment>
      <MobileNavbar />
      <NavBar />
      <Header />
      <Cities />
      <Steps />
      <PerfectPlace />
      <AvailableCities />
      <ListingCategories />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
