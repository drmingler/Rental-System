import React, {useEffect} from "react";
import "../assets/scss/style.scss";
import { StylesProvider } from "@material-ui/core/styles";
import Header from "../components/Header";
import Cities from "../components/Cities";
import Steps from "../components/Steps";
import PerfectPlace from "../components/PerfectPlace";
import AvailableCities from "../components/AvailableCities";
import ListingCategories from "../components/ListingCategories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MobileNavbar from "../components/MobileNavBar";

function App() {
  useEffect(()=>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  },[])
  return (
    <StylesProvider injectFirst>
      <div className="App">
        <MobileNavbar />
        <NavBar />
        <Header />
        <Cities />
        <Steps />
        <PerfectPlace />
        <AvailableCities />
        <ListingCategories />
        <Footer />
      </div>
    </StylesProvider>
  );
}

export default App;
