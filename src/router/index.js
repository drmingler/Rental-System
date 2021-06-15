import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPropertyPage from "../pages/AddPropertyPage";
import MyListingsPage from "../pages/MyListingPage";
import HouseDetailsPage from "../pages/HouseDetailsPage";
import HousesForRentPage from "../pages/HousesForRentPage";
import ProfileSettings from "../pages/ProfileSettings";
import PaymentTxHistory from "../pages/PaymentTxHistory";
import PaymentSubscriptionPage from "../pages/PaymentSubscriptionPage";
import Messages from "../pages/Messages";
import ChatUI from "../pages/ChatUI";
import LandlordProfilePage from "../pages/LandlordProfilePage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PasswordReset from "../pages/PasswordReset";
import PlatformUsage from "../pages/PlatformUsage";
import RentingInstruction from "../pages/RentingInstruction";
import PricingPage from "../pages/PricingPage";
import TermsOfUse from "../pages/TermsOfUse";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoutes from "./ProtectedRoutes";
import Logout from "../pages/Logout";

const Routers = () => {
  return (
    <Router basename={"/"}>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <ProtectedRoutes exact path={"/list"} component={AddPropertyPage} />
        <ProtectedRoutes
          exact
          path={"/my-listings/:landlordId"}
          component={MyListingsPage}
        />
        <Route
          exact
          path={"/property/:propertyId"}
          component={HouseDetailsPage}
        />
        <Route exact path={"/properties/:lat/:lng"} component={HousesForRentPage} />
        <ProtectedRoutes exact path={"/profile"} component={ProfileSettings} />
        <ProtectedRoutes
          exact
          path={"/payment/history"}
          component={PaymentTxHistory}
        />
        <ProtectedRoutes
          exact
          path={"/payment/subscribe"}
          component={PaymentSubscriptionPage}
        />
        <ProtectedRoutes exact path={"/messages"} component={Messages} />
        <ProtectedRoutes exact path={"/messages/chat"} component={ChatUI} />
        <Route
          exact
          path={"/profile/landlord"}
          component={LandlordProfilePage}
        />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/logout"} component={Logout} />
        <Route exact path={"/sign-up"} component={SignUp} />
        <Route exact path={"/reset-password"} component={PasswordReset} />
        <Route exact path={"/renting"} component={PlatformUsage} />
        <Route
          exact
          path={"/renting-instruction"}
          component={RentingInstruction}
        />
        <Route exact path={"/pricing"} component={PricingPage} />
        <Route exact path={"/terms"} component={TermsOfUse} />
        <Route exact path={"/privacy-policy"} component={PrivacyPolicy} />
        <Route exact path={"/not-found"} component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default Routers;
