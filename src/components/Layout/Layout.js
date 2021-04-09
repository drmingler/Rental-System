import React, {Fragment, useEffect} from "react";
import {Footer, MobileNavbar, NavBar} from "./index";

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
