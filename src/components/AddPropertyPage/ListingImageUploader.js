import React, { Fragment, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { ReactComponent as Cancel } from "../../assets/img/x.svg";
import { ReactComponent as Camera } from "../../assets/img/camera.svg";

const ListingImageUploader = ({ uploadCallback }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [showImage, setImageVisibility] = useState(false);

  const handleRemoveImage = () => {
    setImageVisibility(!showImage);
  };

  const handleImageUpload = event => {
    const image = event.currentTarget.files[0];

    let reader = new FileReader();
    reader.onloadend = () => {
      setImageVisibility(true);
      setBackgroundImage(reader.result);
      uploadCallback();
    };
    reader.readAsDataURL(image);
  };

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
            accept="image/*"
            multiple
            type="file"
            className="upload-file-input"
            onChange={handleImageUpload}
          />
        </Fragment>
      )}
    </Paper>
  );
};
export default ListingImageUploader;
