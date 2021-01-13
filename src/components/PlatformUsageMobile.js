import React, { Fragment } from "react";
import RentingMobile from "./RentingMobile";
import TipsMobile from "./TipsMobile";
import ProvenResultsMobile from "./ProvenResultsMobile";
import messagingImage from "../assets/img/messaging.webp";

const PlatformUsageMobile = () => {
  return (
    <Fragment>
      <RentingMobile>
        <h1>Book your new home from home</h1>
        <div className="service-image-no-shadow">
          <img alt="" src={messagingImage} />
        </div>
        <p>
          Once you’ve paid the first month's rent, the place is yours. You’ll
          receive an immediate confirmation which can often be used as proof of
          residency for any visa applications or resident permits you may need.
          The beauty of booking online means there’s no need for viewings. We
          believe that no one should be disadvantaged based on where they live.
        </p>
      </RentingMobile>
      <TipsMobile />
      <RentingMobile>
        <h1>Book your new home from home</h1>
        <div className="service-image-no-shadow">
          <img alt="" src={messagingImage} />
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
        <div className="service-image-no-shadow">
          <img alt="" src={messagingImage} />
        </div>
        <p>
          Once you’ve paid the first month's rent, the place is yours. You’ll
          receive an immediate confirmation which can often be used as proof of
          residency for any visa applications or resident permits you may need.
          The beauty of booking online means there’s no need for viewings. We
          believe that no one should be disadvantaged based on where they live.
        </p>
      </RentingMobile>
      <ProvenResultsMobile />
      <RentingMobile>
        <h1>Recorded, written communication</h1>
        <p>
          It’s wise to get to know your potential landlord, and no doubt they’ll
          want to know their future tenant too! You can get the conversation
          rolling in the click of a button. Simply enter your message and
          submit! Briefly introduce yourself; explain why you’re interested in
          their place, what you’ll be doing in that city and what your hobbies
          and interests are. This instantly establishes a personal connection.
          TOP TIP: before you move on to more specific questions about their
          listing, make sure you’ve checked the availability calendar and other
          details, so you don’t waste time asking questions you already have the
          answer to!
        </p>
        <button className="go-to-inbox">Go to My Inbox</button>
      </RentingMobile>
    </Fragment>
  );
};
export default PlatformUsageMobile;
