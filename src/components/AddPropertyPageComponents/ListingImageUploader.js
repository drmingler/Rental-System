import React, {Fragment} from "react";
import Paper from "@material-ui/core/Paper";
import {ReactComponent as Cancel} from "../../assets/img/x.svg";
import {ReactComponent as Camera} from "../../assets/img/camera.svg";
import useImageUploader from "../../hooks/useImageUploader";

const ListingImageUploader = ({ uploadCallback, formHandlers }) => {
  const { setFieldValue, values } = formHandlers;

  const {
    handleImageUpload,
    handleRemoveImage,
    backgroundImage,
    showImage
  } = useImageUploader(uploadCallback);

  return (
    <Paper
      elevation={0}
      className="listing-image"
      style={{ backgroundImage: `url(${showImage ? backgroundImage : ""})` }}
    >
      {showImage && (
        <div className="cancel-icon-container" onClick={handleRemoveImage}>
          <Cancel className="cancel-icon" />
        </div>
      )}
      {!showImage && (
        <Fragment>
          <div className="listing-image-content">
            <div className="listing-svg">
              <Camera />
            </div>
            <span className="image-instruction">Add Photo</span>
          </div>
          <input
            name="image"
            accept="image/*"
            multiple
            type="file"
            className="upload-file-input"
            onChange={event => {
              handleImageUpload(event);
              setFieldValue("image", [
                ...values.image,
                event.currentTarget.files[0]
              ]);
            }}
          />
        </Fragment>
      )}
    </Paper>
  );
};
export default ListingImageUploader;
