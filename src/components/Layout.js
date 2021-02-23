import React, { Fragment, useEffect } from "react";
import MobileNavbar from "./MobileNavBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = props => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <Fragment>
      <MobileNavbar />
      <NavBar fixed={props.fixed} />
      {props.children}
      <Footer />
    </Fragment>
  );
};
export default Layout;
