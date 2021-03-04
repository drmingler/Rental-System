import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const ImageSlideContext = React.createContext();
const usePropertySlide = MockImages => {
  const [showSlide, setSlide] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  let ImageIndex = MockImages.length - 1;

  useEffect(() => {
    if (showSlide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSlide]);

  const handleChangePicture = indexChange => {
    let newIndex = currentIndex + indexChange;
    if (newIndex > ImageIndex) {
      return setCurrentIndex(0);
    }
    if (newIndex < 0) {
      return setCurrentIndex(ImageIndex);
    }
    setCurrentIndex(newIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleChangePicture(-1),
    onSwipedRight: () => handleChangePicture(1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return {
    showSlide,
    setSlide,
    handleChangePicture,
    currentIndex,
    ImageIndex,
    swipeHandlers,
  };
};
export  {usePropertySlide, ImageSlideContext};
