import React from "react";
import {Col} from "react-bootstrap";
import useSelect from "../../hooks/useSelect";

const HouseRulesIconWrapper = ({
  InactiveIcon,
  ActiveIcon,
  text,
  houseRules,
  selectHouseRule
}) => {
  const { selectedOption, handleSelect } = useSelect(
    houseRules,
    selectHouseRule,
    text
  );

  return (
    <Col
      className="listing-icon-container col-md-4 col-lg-3 col-xs-6"
      onClick={handleSelect}
    >
      <div className="listing-amenities-icon-wrapper ">
        {selectedOption ? <ActiveIcon /> : <InactiveIcon />}
        <span className={`${selectedOption && "active"}`}>{text}</span>
      </div>
    </Col>
  );
};

export default HouseRulesIconWrapper;
