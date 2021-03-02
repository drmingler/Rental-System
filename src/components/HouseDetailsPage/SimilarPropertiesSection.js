import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HouseCard } from "../HousesForRentPage";
import useImageVisibility from "../../hooks/useImageVisiblity";
import Berlin from "../../assets/img/Berlin.webp";

const imagePlaceHolder = [
  { background: Berlin },
  { background: Berlin },
  { background: Berlin },
  { background: Berlin },
  { background: Berlin },
  { background: Berlin }
];

const SimilarPropertiesSection = () => {
  const { imagesCount, hiddenImages, showMoreImages } = useImageVisibility(
    imagePlaceHolder
  );
  return (
    <section className="similar-properties-section">
      <Container fluid="lg">
        <Row>
          <Col lg={12}>
            <h1 className="header-text">Similar Properties Nearby</h1>
            <ul className="row properties-nearby">
              {[...Array(imagesCount)].map((item, idx) => (
                <li className="col-md-4" key={idx}>
                  <HouseCard image={imagePlaceHolder[idx].background} />
                </li>
              ))}
            </ul>
            <div className="show-more-wrapper">
              {hiddenImages !== 0 && (
                <button onClick={showMoreImages} className="show-more-btn">
                  Show more
                </button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default SimilarPropertiesSection;
