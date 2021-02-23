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
        </Switch>
      </Router>
    </StylesProvider>
  );
}
export default App;

// housingforyou
// 1. renting-out page and the link it directs you to page.
// 5. My listings page

// Rent berry
// 2. List a property page
// 3. Houses for rent page
// 4. Property Page mixture of the two, header, amenities and images from rentberry then others from housinganywhere
// 6. Verify account page
// 7. Edit profile page content from housing anywhere and rent berry
// 8. reg and login
// 9. https://housinganywhere.com/users/show/577486

// import React from "react";
//
// const RentingInstruction = () => {
//   return (<div>
//
//   </div>);
// };
// export default RentingInstruction;
