import { Col } from "react-bootstrap";
import React from "react";

const FilterOptions = ({
  text,
  sizeSmall,
  sizeBig,
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
    <Col xs={sizeSmall} lg={sizeBig} className="panel-options-container">
      <div
        className={`panel-options  ${filterOption && "active"}`}
        onClick={handleClick}
      >
        <span>{text}</span>
      </div>
    </Col>
  );
};

export default FilterOptions;
