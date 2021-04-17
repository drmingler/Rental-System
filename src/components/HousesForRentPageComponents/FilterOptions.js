import {Col} from "react-bootstrap";
import React from "react";
import useSelect from "../../hooks/useSelect";

const FilterOptions = ({
                         text,
                         sizeSmall,
                         sizeBig,
                         filtersOptions,
                         setFilterOption,
                         customKey,
                         value
                       }) => {
  const { selectedOption, handleSelect } = useSelect(
      filtersOptions,
      setFilterOption,
      customKey,
      value
  );

  return (
    <Col xs={sizeSmall} lg={sizeBig} className="panel-options-container">
      <div
        className={`panel-options  ${selectedOption && "active"}`}
        onClick={handleSelect}
      >
        <span>{text}</span>
      </div>
    </Col>
  );
};

export default FilterOptions;
