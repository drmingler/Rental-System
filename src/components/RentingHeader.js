import React from "react";
import { Container, Row } from "react-bootstrap";

const RentingHeader = ({ smallImage, mediumImage, largeImage, children }) => {
  return (
    <header className="renting-header">
      <picture className="header-image">
        <source media="(max-width:478px)" srcSet={smallImage} />
        <source media="(max-width:1366px)" srcSet={mediumImage} />
        <img alt="renting-bg" srcSet={largeImage} />
      </picture>
      <Container>
        <Row>{children}</Row>
      </Container>
    </header>
  );
};
export default RentingHeader;
