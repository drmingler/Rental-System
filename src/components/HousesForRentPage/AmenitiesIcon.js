import React from "react";
import { Col } from "react-bootstrap";

const AmenitiesIcon = ({
  iconDark,
  iconWhite,
  text,
  filtersOptions,
  setFilterOption
}) => {
  let filterOption = filtersOptions[text];

  function handleClick() {
    if (filterOption) {
      const { [filterOption]: _, ...newFilterOptions } = filtersOptions;
      setFilterOption(newFilterOptions);
    } else {
      setFilterOption({ ...filtersOptions, [text]: text });
    }
  }

  return (
    <Col xs={6} className="panel-icon-container">
      <div
        className={`panel-icon ${filterOption && "active"}`}
        onClick={handleClick}
      >
        {filterOption ? iconWhite : iconDark}
      </div>
      <span className="panel-icon-text" onClick={handleClick}>
        {text}
      </span>
    </Col>
  );
};

export default AmenitiesIcon;
