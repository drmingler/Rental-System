import React, {useLayoutEffect, useState} from "react";
import {AccountSettingsDropDown, LearnMoreContent, MenuOptionsDropDown, ProductContent} from "../DropdownComponents";
import {withRouter} from "react-router-dom";
import HomeLogo from "../../assets/img/homeLogo.png"

function NavBar({ fixed, history }) {
  const [transparent, setTransparent] = useState(
    fixed ? "navbar" : "navbar-transparent"
  );
  useLayoutEffect(() => {
    window.onscroll = () => {
      let currentPosition = window.pageYOffset;

      if (currentPosition > 100) {
        setTransparent("navbar");
      } else {
        !fixed && setTransparent("navbar-transparent");
      }
    };
  }, [fixed]);

  return (
    <div className={`${transparent}`}>
      <div className="logo">
        <img src={HomeLogo} alt="logo"/>
      </div>
      <div className="nav-item-container">
        <ul className="nav-items">
          <MenuOptionsDropDown menuOption={"Products"}>
            <ProductContent />
          </MenuOptionsDropDown>
          <li>
            <a href="/">Properties</a>
          </li>
          <li>
            <a href="/">Messages</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <MenuOptionsDropDown menuOption={"Learn More"}>
            <LearnMoreContent />
          </MenuOptionsDropDown>
        </ul>
        <div className="list-property">
            <button onClick={()=>history.push("/list")}>List a Property</button>
          <AccountSettingsDropDown />
        </div>
      </div>
    </div>
  );
}

export default withRouter(NavBar);