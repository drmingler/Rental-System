import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import PropertyImage1 from "../../assets/img/property-image-1.jpg";
import PropertyImage2 from "../../assets/img/property-image-2.jpg";
import PropertyImage3 from "../../assets/img/property-image-3.jpg";

const PropertyImage = ({ Image }) => {
  return (
    <Paper
      elevation={0}
      className="property-image"
      style={{ backgroundImage: `url(${Image})` }}
    />
  );
};

const imagePlaceHolder = [
  { background: PropertyImage1 },
  { background: PropertyImage2 },
  { background: PropertyImage3 },
  { background: PropertyImage1 },
  { background: PropertyImage2 },
  { background: PropertyImage3 }
];

const HouseImagesSection = () => {
  const [imagesCount, increaseImage] = useState(3);
  let totalImages = imagePlaceHolder.length;
  let hiddenImages = totalImages - imagesCount;

  function showMoreImages() {
    increaseImage(totalImages);
  }

  return (
    <section className="property-images-section">
      <Container fluid="lg">
        <Row>
          <Col md={12} xl={9} className="property-image-container">
            <ul className="row">
              {[...Array(imagesCount)].map((item, idx) => (
                <li className="col-md-4" key={idx}>
                  <PropertyImage Image={imagePlaceHolder[idx].background} />
                </li>
              ))}
            </ul>
            <div className="show-more-properties">
              {hiddenImages !== 0 && (
                <span onClick={showMoreImages}>Show {hiddenImages} more</span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HouseImagesSection;
