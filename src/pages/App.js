import React from "react";
import "../assets/scss/style.scss";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Cities from "../components/Cities";
import Steps from "../components/Steps";
import PerfectPlace from "../components/PerfectPlace";
import AvailableCities from "../components/AvailableCities";
import ListingCategories from "../components/ListingCategories";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App">
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
