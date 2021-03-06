import React  from "react";
import "../assets/scss/style.scss";
import { StylesProvider } from "@material-ui/core/styles";
import HouseDetailsPage from "./HouseDetailsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
  return (
    <StylesProvider injectFirst>
      <Router basename={'/'}>
        <Switch>
          <Route exact path={"/"} component={HomePage}/>
          <Route exact path={"/list"} component={AddPropertyPage} />
          <Route exact path={"/properties"} component={HousesForRentPage} />
          <Route exact path={"/property"} component={HouseDetailsPage} />
          <Route exact path={"/renting"} component={PlatformUsage} />
          <Route exact path={"/renting-instruction"} component={RentingInstruction} />
          <Route exact path={"/my-listings"} component={MyListingsPage} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/sign-up"} component={SignUp} />
          <Route exact path={"/reset-password"} component={PasswordReset} />
          <Route exact path={"/not-found"} component={ErrorPage} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}
export default App;

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
// 9. Payment history
// 10.Make Payment page
// 11.Chat widget

// import React from "react";
//
// const RentingInstruction = () => {
//   return (<div>
//
//   </div>);
// };
// export default RentingInstruction;
