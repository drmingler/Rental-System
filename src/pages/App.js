import React  from "react";
import "../assets/scss/style.scss";
import Header from "../components/Header";
import Cities from "../components/Cities";
import Steps from "../components/Steps";
import PerfectPlace from "../components/PerfectPlace";
import AvailableCities from "../components/AvailableCities";
import ListingCategories from "../components/ListingCategories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Cities />
      <Steps />
      <PerfectPlace />
      <AvailableCities />
      <ListingCategories />
      <Footer />
    </div>
  );
}

export default App;
