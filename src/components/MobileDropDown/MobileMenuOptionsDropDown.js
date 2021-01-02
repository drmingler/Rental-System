import React, { useContext, useEffect, useRef, useState } from "react";
import { MobileDropDownContext } from "./MobileDropDownWrapper";

function MobileMenuOptionDropDown({ height, children }) {
  const [numberOfList, setNumberOfList] = useState(0);
  const ref = useRef();
  const { showActive } = useContext(MobileDropDownContext);

  useEffect(() => {
    const numberOfList = ref.current.children.length * 50;
    setNumberOfList(numberOfList);
  }, []);

  if (height) {
    return (
      <ul
        className="mobile-menu-item-dropdown"
        style={{ height: showActive ? height : 0 }}
        ref={ref}
      >
        {children}
      </ul>
    );
  }
  return (
    <ul
      className="mobile-menu-item-dropdown"
      style={{ height: showActive ? numberOfList : 0 }}
      ref={ref}
    >
      {children}
    </ul>
  );
}
export default MobileMenuOptionDropDown;
