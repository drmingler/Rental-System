import React from "react";

const CustomTransition = ({ state, initialClass, finalClass, children,  ...rest}) => {
    if (state) {
        return <div className={`${initialClass} ${finalClass}`} {...rest}>{children}</div>;
    }
    return <div className={`${initialClass}`} {...rest}>{children}</div>;
};

export default CustomTransition;
