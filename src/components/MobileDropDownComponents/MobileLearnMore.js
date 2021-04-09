import React from "react";
import {MobileDropDownHeader, MobileDropDownWrapper, MobileMenuOptionDropDown} from "./index";
import {LearnMoreContent} from "../DropdownComponents";

const MobileLearnMore = () => {
    return (
        <MobileDropDownWrapper>
            <MobileDropDownHeader>
                <span>Learn More</span>
            </MobileDropDownHeader>
            <MobileMenuOptionDropDown height={150}>
                <div className="mobile-menu-option-content-container">
                    <LearnMoreContent/>
        </div>
      </MobileMenuOptionDropDown>
    </MobileDropDownWrapper>
  );
};
export default MobileLearnMore;
