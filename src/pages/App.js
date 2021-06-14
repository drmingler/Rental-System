import React from "react";
import "../assets/scss/style.scss";
import {StylesProvider} from "@material-ui/core/styles";
import Routers from "../router";

function App() {
  return (
    <StylesProvider injectFirst>
      <Routers />
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
