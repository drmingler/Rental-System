import useToggle from "./useToggle";
import { useEffect, useRef } from "react";

const useDropDown = () => {
  const { showActive, setActive } = useToggle();
  const innerRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      !innerRef.current.contains(e.target) && setActive(false);
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [setActive]);
  return {
    showActive,
    setActive,
    innerRef
  };
};

export default useDropDown;
