import { useState } from "react";

const UseToggle = () => {
  const [showActive, setActive] = useState(false);

  return {
      showActive,
      setActive
  };
};

export default UseToggle;
