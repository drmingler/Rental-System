import RentingMobile from "./RentingMobile";
import { ReactComponent as BookOnline } from "../assets/img/Book_online.svg";
import React, {Fragment} from "react";

function RentalInstructionMobile() {
  return (
    <Fragment>
      <RentingMobile>
        <h1>Book your new home from home</h1>
        <div className="service-image">
          <BookOnline />
        </div>
        <p>
          Once you’ve paid the first month's rent, the place is yours. You’ll
          receive an immediate confirmation which can often be used as proof of
          residency for any visa applications or resident permits you may need.
          The beauty of booking online means there’s no need for viewings. We
          believe that no one should be disadvantaged based on where they live.
        </p>
      </RentingMobile>
      <RentingMobile>
        <h1>Book your new home from home</h1>
        <div className="service-image">
          <BookOnline />
        </div>
        <p>
          Once you’ve paid the first month's rent, the place is yours. You’ll
          receive an immediate confirmation which can often be used as proof of
          residency for any visa applications or resident permits you may need.
          The beauty of booking online means there’s no need for viewings. We
          believe that no one should be disadvantaged based on where they live.
        </p>
        <a href="/">HOW TO FIND THE PERFECT PLACE</a>
      </RentingMobile>
      <RentingMobile>
        <h1>Book your new home from home</h1>
        <div className="service-image">
          <BookOnline />
        </div>
        <p>
          Once you’ve paid the first month's rent, the place is yours. You’ll
          receive an immediate confirmation which can often be used as proof of
          residency for any visa applications or resident permits you may need.
          The beauty of booking online means there’s no need for viewings. We
          believe that no one should be disadvantaged based on where they live.
        </p>
      </RentingMobile>
    </Fragment>
  );
}

export default RentalInstructionMobile;
