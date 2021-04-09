import React, {Fragment} from "react";
import {DropdownItem} from "./index";
import {ReactComponent as HouseIcon} from "../../assets/img/house.svg";

const LearnMoreContent = () => {
    return (
        <Fragment>
            <h3>Rental Accommodation</h3>
            <DropdownItem icon={<HouseIcon/>}>
                <h5>Find a place</h5>
                <span>How renting works on our platform</span>
            </DropdownItem>
            <DropdownItem icon={<HouseIcon/>}>
        <h5>Rent out your place</h5>
        <span>How to rent your properties online</span>
      </DropdownItem>
    </Fragment>
  );
};
export default LearnMoreContent;
