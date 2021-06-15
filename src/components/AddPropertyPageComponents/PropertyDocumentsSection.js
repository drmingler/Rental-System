import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ReactComponent as FileUploaderIcon} from "../../assets/img/file-plus.svg";
import {FileList} from "./index";

const PropertyDocumentsSection = ({ formHandlers }) => {
  const { setFieldValue, values } = formHandlers;

  const handleImageUpload = event => {
    const image = event.currentTarget.files[0];
    setFieldValue("files", [...values.files, image]);
  };
  const handleRemoveFile = id => {
    values.files.splice(id, 1);
    setFieldValue("files", [...values.files]);
  };

  return (
    <section className="property-documents-section">
      <Container fluid="lg">
        <Row>
          <Col md={12} lg={9}>
            <div className="file-uploader">
              <div className="upload-instruction">
                <FileUploaderIcon />
                <span className="text">Upload property documents here</span>
              </div>
              <input
                name="files"
                multiple
                type="file"
                className="upload-file-input"
                onChange={handleImageUpload}
              />
            </div>
          </Col>
          <Col md={12} lg={9}>
            <ul className="list-of-files-container">
              {values.files.map((file, idx) => (
                <FileList
                  name={file.name}
                  size={file.size}
                  id={idx}
                  key={idx}
                  handleRemoveFile={handleRemoveFile}
                />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default PropertyDocumentsSection;
