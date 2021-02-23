import { useState } from "react";

const useImageVisibility = imagePlaceHolder => {
  const [imagesCount, increaseImage] = useState(3);
  let totalImages = imagePlaceHolder.length;
  let hiddenImages = totalImages - imagesCount;

  function showMoreImages() {
    increaseImage(totalImages);
  }

  return { showMoreImages, imagesCount, hiddenImages };
};

export default useImageVisibility;
