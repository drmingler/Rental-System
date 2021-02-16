import React from "react";

const CustomTransition = ({ state, initialClass, finalClass, children }) => {
    if (state) {
        return <div className={`${initialClass} ${finalClass}`}>{children}</div>;
    }
    return <div className={`${initialClass}`}>{children}</div>;
};

export default CustomTransition;
