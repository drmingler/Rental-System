import React from "react";
import useSelect from "../../hooks/useSelect";

const ListingAmenitiesIconWrapper = ({
  InactiveIcon,
  ActiveIcon,
  text,
  houseAmenities,
  selectHouseAmenity
}) => {
  const { selectedOption, handleSelect } = useSelect(
    houseAmenities,
    selectHouseAmenity,
    text
  );
  return (
    <li className="col-6 listing-amenities-icon" onClick={handleSelect}>
      <div className="listing-amenities-icon-wrapper ">
        {selectedOption ? <ActiveIcon /> : <InactiveIcon />}
        <span className={`${selectedOption && "active"}`}>{text}</span>
      </div>
    </li>
  );
};

export default ListingAmenitiesIconWrapper;
