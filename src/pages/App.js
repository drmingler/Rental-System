import React, { useEffect } from "react";
import "../assets/scss/style.scss";
import { StylesProvider } from "@material-ui/core/styles";
import HomePage from "./HomePage";

function App() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <StylesProvider injectFirst>
      <div className="App">
        <HomePage />
      </div>
    </StylesProvider>
  );
  // housingforyou
  // 1. renting-out page and the link it directs you to page.
  // 5. My listings page

  // Rent berry
  // 2. List a property page
  // 3. Houses for rent page
  // 4. Property Page mixture of the two, header, amenities and images from rentberry then others from housinganywhere
  // 6. Verify account page
  // 7. Edit profile page content from housing anywhere and rent berry
}

export default App;
