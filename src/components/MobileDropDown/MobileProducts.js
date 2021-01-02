import React from "react";
import {
  MobileDropDownHeader,
  MobileDropDownWrapper,
  MobileMenuOptionDropDown
} from "./index";
import { ProductContent } from "../Dropdown";

const MobileProducts = () => {
  return (
    <MobileDropDownWrapper>
      <MobileDropDownHeader>
        <span>Product</span>
      </MobileDropDownHeader>
      <MobileMenuOptionDropDown height={150}>
        <div className="mobile-menu-option-content-container">
          <ProductContent />
        </div>
      </MobileMenuOptionDropDown>
    </MobileDropDownWrapper>
  );
};
export default MobileProducts;
