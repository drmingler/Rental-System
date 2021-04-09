import React from "react";
import {Col} from "react-bootstrap";
import {ReactComponent as BookOnline} from "../assets/img/Book_online.svg";
import useToggle from "../hooks/useToggle";
import {Layout} from "../components/Layout/index";
import {Switch} from "../components/CommonComponents/index";
import {
    RentalInstructionMobile,
    RentingFooter,
    RentingHeader,
    RentingLeft,
    RentingRight
} from "../components/PlatformUsage/index";
import rentBG1 from "../assets/img/newProperty.jpg";
import rentBG2 from "../assets/img/newProperty2.jpg";
import rentBG3 from "../assets/img/newProperty3.jpg";

const RentingInstruction = () => {
  const { showActive, setActive } = useToggle();
  return (
    <Layout>
      <RentingHeader
        largeImage={rentBG3}
        mediumImage={rentBG2}
        smallImage={rentBG1}
      >
        <Col lg={12}>
          <div className="renting-header-text">
            <h1>How it works</h1>
            <p>Looking for a place? Or renting one out?</p>
            <p>Here's how we bring landlords and tenants together</p>
          </div>
          <Switch showActive={showActive} setActive={setActive} />
        </Col>
      </RentingHeader>
      <RentingLeft image={<BookOnline />} shadow={true}>
        <h1>Book your new home from home</h1>
        <p>
          Once you’ve paid the first month's rent, the place is yours. You’ll
          receive an immediate confirmation which can often be used as proof of
          residency for any visa applications or resident permits you may need.
          The beauty of booking online means there’s no need for viewings. We
          believe that no one should be disadvantaged based on where they live.
        </p>
        <a href="/">HOW TO FIND THE PERFECT PLACE</a>
      </RentingLeft>
      <RentingRight image={<BookOnline />} shadow={true}>
        <h1>Book your new home from home</h1>
        <p>
          Once you’ve paid the first month's rent, the place is yours. You’ll
          receive an immediate confirmation which can often be used as proof of
          residency for any visa applications or resident permits you may need.
          The beauty of booking online means there’s no need for viewings. We
          believe that no one should be disadvantaged based on where they live.
        </p>
        <a href="/">HOW TO FIND THE PERFECT PLACE</a>
      </RentingRight>
      <RentingLeft image={<BookOnline />} shadow={true}>
        <h1>Book your new home from home</h1>
        <p>
          Once you’ve paid the first month's rent, the place is yours. You’ll
          receive an immediate confirmation which can often be used as proof of
          residency for any visa applications or resident permits you may need.
          The beauty of booking online means there’s no need for viewings. We
          believe that no one should be disadvantaged based on where they live.
        </p>
      </RentingLeft>
      <RentingRight image={<BookOnline />} shadow={true}>
        <h1>Book your new home from home</h1>
        <p>
          Once you’ve paid the first month's rent, the place is yours. You’ll
          receive an immediate confirmation which can often be used as proof of
          residency for any visa applications or resident permits you may need.
          The beauty of booking online means there’s no need for viewings. We
          believe that no one should be disadvantaged based on where they live.
        </p>
      </RentingRight>
      <RentingLeft image={<BookOnline />} shadow={true}>
        <h1>Book your new home from home</h1>
        <p>
          Once you’ve paid the first month's rent, the place is yours. You’ll
          receive an immediate confirmation which can often be used as proof of
          residency for any visa applications or resident permits you may need.
          The beauty of booking online means there’s no need for viewings. We
          believe that no one should be disadvantaged based on where they live.
        </p>
        <a href="/">HOW TO FIND THE PERFECT PLACE</a>
      </RentingLeft>
      <RentalInstructionMobile />
      <RentingFooter />
    </Layout>
  );
};
export default RentingInstruction;
