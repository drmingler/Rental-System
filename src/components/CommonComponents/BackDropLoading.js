import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const BackDropLoading = ({ state }) => {
  return (
    <Backdrop open={Boolean(state)} style={{ zIndex: 9999 }}>
      <CircularProgress className="button-spinner" />
    </Backdrop>
  );
};

export default BackDropLoading;
