import React, { Fragment } from "react";
import MobileNavbar from "./MobileNavBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = props => {
  return (
    <Fragment>
      <MobileNavbar />
      <NavBar />
      {props.children}
      <Footer />
    </Fragment>
  );
};
export default Layout;
