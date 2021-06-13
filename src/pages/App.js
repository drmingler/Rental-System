import React from "react";
import "../assets/scss/style.scss";
import {StylesProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HouseDetailsPage from "./HouseDetailsPage";
import HomePage from "./HomePage";
import PlatformUsage from "./PlatformUsage";
import AddPropertyPage from "./AddPropertyPage";
import HousesForRentPage from "./HousesForRentPage";
import RentingInstruction from "./RentingInstruction";
import MyListingsPage from "./MyListingPage";
import Login from "./Login";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset";
import ErrorPage from "./ErrorPage";
import ProfileSettings from "./ProfileSettings";
import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";
import PaymentSubscriptionPage from "./PaymentSubscriptionPage";
import PaymentTxHistory from "./PaymentTxHistory";
import PricingPage from "./PricingPage";
import LandlordProfilePage from "./LandlordProfilePage";
import ChatUI from "./ChatUI";
import Messages from "./Messages";

function App() {
  return (
    <StylesProvider injectFirst>
      <Router basename={"/"}>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/list"} component={AddPropertyPage} />
          <Route exact path={"/my-listings"} component={MyListingsPage} />
          <Route exact path={"/property"} component={HouseDetailsPage} />
          <Route exact path={"/properties"} component={HousesForRentPage} />
          <Route exact path={"/profile"} component={ProfileSettings} />
          <Route exact path={"/payment/history"} component={PaymentTxHistory} />
          <Route
            exact
            path={"/payment/subscribe"}
            component={PaymentSubscriptionPage}
          />
          <Route exact path={"/messages"} component={Messages} />
          <Route exact path={"/messages/chat"} component={ChatUI} />
          <Route
            exact
            path={"/profile/landlord"}
            component={LandlordProfilePage}
          />
          <Route exact path={"/login"} component={Login} />
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
    </StylesProvider>
  );
}

export default App;

// TODO
// 1. Add submit all the forms
// Login, Profile, Payment, HouseUpload
// 2. Fetch all the data
// 3. Complete map
// 4. Chat
// 4. Filtering

// housingforyou
// 1. renting-out page and the link it directs you to page.

// Rent berry
// 2. List a property page
// 3. Houses for rent page
// 4. Property Page mixture of the two, header, amenities and images from rentberry then others from housinganywhere
// 5. My listings page
// 6. Verify account page

// TO DO
// 7. Use the edit form as the verify form. Edit profile page content from housing anywhere and rent berry
// 8. reg and login
// 11.terms and privacy policy

// 9. Payment history https://drawsql.app/settings/teams/9617#/subscription https://housinganywhere.com/my/payouts/history
// 10.Make Payment page

// 12. Chat widget
// 13. Go through the whole code and add the necessary stuff
// 14. Reset password page

// import React from "react";
//
// const RentingInstruction = () => {
//   return (<div>
//
//   </div>);
// };
// export default RentingInstruction;

// BACKEND
// Integrate with google API
// Integrate with google for searching address
// Integrate with api for chat

// CLEAN UP
// remove warnings
// fix payload
// property document uploader

// Add map and google address search

// find a nice logo
// Project outline
