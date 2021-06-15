import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

const BackDropLoadingFull = ({ state }) => {
  return (
    <Backdrop
      open={Boolean(state)}
      style={{ zIndex: 9999, backgroundColor: "white" }}
    >
      <CircularProgress
        className="button-spinner"
        style={{ color: "#7c54c1" }}
      />
    </Backdrop>
  );
};

export default BackDropLoadingFull;
