import React from "react";
import {Col} from "react-bootstrap";

const AmenitiesIcon = ({ text, children, filtersOptions, setFilterOption }) => {
    let filterOption = filtersOptions[text];

    function handleClick() {
        if (filterOption) {
            const { [filterOption]: _, ...newFilterOptions } = filtersOptions;
            setFilterOption(newFilterOptions);
        } else {
            setFilterOption({ ...filtersOptions, [text]: text });
        }
    }

    return (
        <Col xs={6} className="panel-icon-container" onClick={handleClick}>
            <div className={`panel-icon ${filterOption && "active"}`}>{children}</div>
            <span className="panel-icon-text">{text}</span>
        </Col>
    );
};

export default AmenitiesIcon;
