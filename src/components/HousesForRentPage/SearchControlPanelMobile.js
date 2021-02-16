import React from "react";
import { ReactComponent as ClearAll } from "../../assets/img/clear-all.svg";
import { ReactComponent as MapView } from "../../assets/img/map-view.svg";
import { ReactComponent as HideIcon } from "../../assets/img/hide-icon.svg";
import { ReactComponent as Filter } from "../../assets/img/filter-btn.svg";

const SearchControlPanelMobile = ({panel, clearFilter, togglePanel}) => {
  return (
    <div className="house-search-panel-small-device">
      {panel && (
        <div className="hide-dropdown-container" onClick={clearFilter}>
          <ClearAll className="panel-menu-icon" />
          <span className="hide-dropdown-text">Clear</span>
        </div>
      )}

      {!panel && (
        <div className="small-device-menu-container">
          <MapView className="panel-menu-icon" />
          <div className="small-device-menu-text">
            <span>Map View</span>
          </div>
        </div>
      )}
      {panel && (
        <div
          className="hide-dropdown-container"
          onClick={() => togglePanel(!panel)}
        >
          <HideIcon className="panel-menu-icon" />
          <span className="hide-dropdown-text">Hide Filters</span>
        </div>
      )}
      {!panel && (
        <div
          className="small-device-menu-container"
          onClick={() => togglePanel(!panel, true)}
        >
          <Filter className="panel-menu-icon" />
          <div className="small-device-menu-text">
            <span>Filters</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchControlPanelMobile;
