import React, { useState } from "react";
import { ReactComponent as Filter } from "../../assets/img/filter-btn.svg";
import { ReactComponent as HideIcon } from "../../assets/img/hide-icon.svg";
import { ReactComponent as Expand } from "../../assets/img/expand.svg";
import Paper from "@material-ui/core/Paper";
import useDropDown from "../../hooks/useDropDown";

const DropDownOption = {
  bestMatch: "Best Match",
  Newest: "Newest",
  lowToHigh: "By Price: Low to High",
  HighToLow: "By Price: High to Low"
};

const SearchControlPanel = ({ togglePanel, panel, smallDevice }) => {
  const { showActive, setActive, innerRef } = useDropDown();
  const [showActiveFilter, setActiveFilter] = useState(
    DropDownOption["bestMatch"]
  );

  const showDropDown = () => {
    setActive(!showActive);
  };
  
  const handleSelect = key => {
    setActiveFilter(DropDownOption[key]);
  };

  return (
    <div className="house-search-panel">
      <div className="house-location-container">
        <Filter
          className="panel-menu-icon"
          onClick={() => togglePanel(!panel)}
        />
        <div className="house-location-text">
          <b>20,800 </b>
          <span>New York, NY, USA apartments for rent</span>
        </div>
      </div>

      {panel && !smallDevice && (
        <div
          className="hide-dropdown-container"
          onClick={() => togglePanel(!panel)}
          ref={innerRef}
        >
          <HideIcon className="panel-menu-icon" />
          <span className="hide-dropdown-text">Hide Filters</span>
        </div>
      )}

      {(!panel || smallDevice) && (
        <div className="filter-dropdown" onClick={showDropDown} ref={innerRef}>
          <span className="filter-dropdown-text">{showActiveFilter}</span>
          <Expand className="filter-dropdown-icon" />
          <Paper className="dropdown-option-container" elevation={2}>
            {showActive && (
              <ul>
                <li
                  className="dropdown-option"
                  key="bestMatch"
                  onClick={() => handleSelect("bestMatch")}
                >
                  <span>Best Match</span>
                </li>
                <li
                  className="dropdown-option"
                  key="Newest"
                  onClick={() => handleSelect("Newest")}
                >
                  <span>Newest</span>
                </li>
                <li
                  className="dropdown-option"
                  key="lowToHigh"
                  onClick={() => handleSelect("lowToHigh")}
                >
                  <span>By Price: Low to High</span>
                </li>
                <li
                  className="dropdown-option"
                  key="HighToLow"
                  onClick={() => handleSelect("HighToLow")}
                >
                  <span>By Price: High to Low</span>
                </li>
              </ul>
            )}
          </Paper>
        </div>
      )}
    </div>
  );
};
export default SearchControlPanel;
