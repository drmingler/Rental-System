import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ReactComponent as FileUploaderIcon} from "../../assets/img/file-plus.svg";
import {FileList} from "./index";

const PropertyDocumentsSection = () => {
  const [files, setFiles] = useState([]);
  const handleImageUpload = event => {
    const image = event.currentTarget.files[0];
    setFiles([...files, image]);
  };
  const handleRemoveFile = id => {
    files.splice(id, 1);
    setFiles([...files]);
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
                accept="image/*"
                multiple
                type="file"
                className="upload-file-input"
                onChange={handleImageUpload}
              />
            </div>
          </Col>
          <Col md={12} lg={9}>
            <ul className="list-of-files-container">
              {files.map((file, idx) => (
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
