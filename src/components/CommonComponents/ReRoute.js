import {useHistory} from "react-router-dom";
import React from "react";

const ReRoute = ({ children, to }) => {
    let history = useHistory();
    return <li onClick={() => history.push(to)}>{children}</li>;
};

export default ReRoute;
