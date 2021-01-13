import React from "react";
import { Container, Row } from "react-bootstrap";
import { ReactComponent as GoodIcon } from "../assets/img/goodIcon.svg";
import TipsList from "./TipsList";

const TipsMobile = () => {
  return (
    <section className="tips-mobile">
      <Container>
        <h1>Top tips for approaching an advertiser</h1>
        <Row>
          <TipsList content={"Complete your profile"} image=<GoodIcon /> />
          <TipsList content={"Complete your profile"} image=<GoodIcon /> />
          <TipsList
            content={"Read the advertisement carefully"}
            image=<GoodIcon />
          />
          <TipsList content={"Be yourself & be honest"} image=<GoodIcon /> />
        </Row>
        <Row>
          <TipsList content={"Ask. Ask. Ask!"} image=<GoodIcon /> />
          <TipsList
            content={"Start several conversations"}
            image={<GoodIcon />}
          />
          <TipsList content={"Keep it to the platform"} image=<GoodIcon /> />
        </Row>
      </Container>
    </section>
  );
};
export default TipsMobile;
