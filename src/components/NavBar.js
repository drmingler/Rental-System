import React, { useLayoutEffect, useState } from "react";
import "../assets/scss/style.scss";


const MobileNavbar = () => {
  return(
      <div>

      </div>
  )
}




function NavBar() {
  const [transparent, setTransparent] = useState("nav-transparent");
  useLayoutEffect(() => {
    window.onscroll = () => {
      let currentPosition = window.pageYOffset;

      if (currentPosition > 100) {
        setTransparent("navbar");
      } else {
        setTransparent("nav-transparent");
      }
    };
  }, []);
  return (
    <div className={`${transparent}`}>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="nav-item-container">
        <ul className="nav-items">
          <li>Properties</li>
          <li>Messages</li>
          <li>Pricing</li>
          <li>Learn More</li>
        </ul>
        <div className="list-property">
          <button>List a Property</button>
          <div className="name-dropdown">
            <h4>O</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
