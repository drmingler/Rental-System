import React, { Fragment } from "react";
import MobileNavbar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";

const MyListingsPage = () => {
  return (
    <Fragment>
      <MobileNavbar />
      <NavBar fixed={true} />
    </Fragment>
  );
};
export default MyListingsPage;
