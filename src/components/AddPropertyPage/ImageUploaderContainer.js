import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { ListingImageUploader } from "./index";

const ImageUploaderContainer = () => {
  const [numberOfUploads, increaseNumberOfUploader] = React.useState(3);
  const ref = useRef();

  function checkUploads() {
    const uploadedImagesContainers = ref.current.querySelectorAll(
      ".listing-image"
    );

    // Check if all the uploader already have a background image
    const hasBackgroundImage = Array.from(uploadedImagesContainers).map(
      node => {
        let background = node.style.backgroundImage;
        return background !== 'url("")';
      }
    );

    // if all the uploader already have a background image add a new uploader
    let newNumberOfUploader = numberOfUploads + 1;
    !hasBackgroundImage.includes(false) &&
      numberOfUploads < 10 &&
      increaseNumberOfUploader(newNumberOfUploader);
  }

  return (
    <Col md={9}>
      <div className="listing-image-container">
        <Row ref={ref}>
          {[...Array(numberOfUploads)].map((eachUploader, idx) => (
            <Col xs={6} md={4} key={idx}>
              <ListingImageUploader uploadCallback={checkUploads} />
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  );
};
export default ImageUploaderContainer;
