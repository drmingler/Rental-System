import { useState } from "react";

const useImageUploader = callback => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [showImage, setImageVisibility] = useState(false);

  const handleImageUpload = event => {
    const image = event.currentTarget.files[0];

    let reader = new FileReader();
    reader.onloadend = () => {
      setImageVisibility(true);
      setBackgroundImage(reader.result);
        callback && callback();
    };
    reader.readAsDataURL(image);
  };
  const handleRemoveImage = () => {
    setImageVisibility(!showImage);
  };
  return { handleImageUpload,handleRemoveImage, backgroundImage, showImage };
};

export default useImageUploader;
