import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import useToggle from "../hooks/useToggle";
import Switch from "../components/Switch";
import RentingLeft from "../components/RentingLeft";
import RentingRight from "../components/RentingRight";
import rentBG1 from "../assets/img/newProperty.jpg";
import rentBG2 from "../assets/img/newProperty2.jpg";
import rentBG3 from "../assets/img/newProperty3.jpg";
import { ReactComponent as BookOnline } from "../assets/img/Book_online.svg";
import RentingMobile from "../components/RentingMobile";
import RentingHeader from "../components/RentingHeader";

const RentingInstruction = () => {
  const { showActive, setActive } = useToggle();
  return (
    <Layout>
      <header className="renting-header">
        <RentingHeader
          largeImage={rentBG3}
          mediumImage={rentBG2}
          smallImage={rentBG1}
        />
        <Container>
          <Row>
            <Col lg={12}>
              <div className="renting-header-text">
                <h1>How it works</h1>
                <p>Looking for a place? Or renting one out?</p>
                <p>Here's how we bring landlords and tenants together</p>
              </div>
              <Switch showActive={showActive} setActive={setActive} />
            </Col>
          </Row>
        </Container>
      </header>
      <RentingLeft image={<BookOnline />}>
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
      <RentingRight image={<BookOnline />}>
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
      <RentingLeft image={<BookOnline />}>
        <h1>Book your new home from home</h1>
        <p>
          Once you’ve paid the first month's rent, the place is yours. You’ll
          receive an immediate confirmation which can often be used as proof of
          residency for any visa applications or resident permits you may need.
          The beauty of booking online means there’s no need for viewings. We
          believe that no one should be disadvantaged based on where they live.
        </p>
      </RentingLeft>
      <RentingRight image={<BookOnline />}>
        <h1>Book your new home from home</h1>
        <p>
          Once you’ve paid the first month's rent, the place is yours. You’ll
          receive an immediate confirmation which can often be used as proof of
          residency for any visa applications or resident permits you may need.
          The beauty of booking online means there’s no need for viewings. We
          believe that no one should be disadvantaged based on where they live.
        </p>
      </RentingRight>
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
      <section className="renting-search">
        <Container>
          <picture>
            <source media="(max-width:478px)" srcSet={rentBG1} />
            <source media="(max-width:1366px)" srcSet={rentBG2} />
            <img alt="renting-bg" srcSet={rentBG3} />
          </picture>
          <Row>
            <Col lg={12}>
              <div className="renting-search-content">
                <h1>Find a place that feels like home</h1>
                <button>Search Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};
export default RentingInstruction;
