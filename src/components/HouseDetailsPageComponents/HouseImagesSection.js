import React, {useContext} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import useImageVisibility from "../../hooks/useImageVisiblity";
import {ImageSlideContext} from "../../hooks/usePropertySlides";

const PropertyImage = ({ Image }) => {
  return (
    <Paper
      elevation={0}
      className="property-image"
      style={{ backgroundImage: `url(${Image})` }}
    />
  );
};

const HouseImagesSection = ({ propertyImages }) => {
  const { setSlide } = useContext(ImageSlideContext);

  const { imagesCount, hiddenImages, showMoreImages } = useImageVisibility(
    propertyImages
  );

  return (
    <section className="property-images-section">
      <Container fluid="lg">
        <Row>
          <Col md={12} lg={9} className="property-image-container">
            <ul className="row">
              {[...Array(imagesCount)].map((item, idx) => (
                <li
                  className="col-md-4"
                  key={idx}
                  onClick={() => setSlide(true)}
                >
                  <PropertyImage Image={propertyImages[idx]} />
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
