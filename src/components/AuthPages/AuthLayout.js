import React from "react";
import { ReactComponent as Cancel } from "../../assets/img/x-slim.svg";
import { withRouter } from "react-router-dom";

const AuthLayout = ({ children, history }) => {
  const handleClick = () => {
    return history.push("/");
  };
  return (
    <section className="auth-page">
      <div className="cancel-button" onClick={handleClick}>
        <Cancel />
      </div>
      {children}
    </section>
  );
};
export default withRouter(AuthLayout);
