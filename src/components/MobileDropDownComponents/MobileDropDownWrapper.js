import React from "react";
import useToggle from "../../hooks/useToggle";

export const MobileDropDownContext = React.createContext();
function MobileDropDownWrapper(props) {
  const toggle = useToggle();
  return (
    <MobileDropDownContext.Provider value={toggle}>
      <div>{props.children}</div>
    </MobileDropDownContext.Provider>
  );
}
export default MobileDropDownWrapper;
