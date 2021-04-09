import React from "react";
import useSelect from "../../hooks/useSelect";

const AmenitiesIcon = props => {
    const {
        IconDark,
        IconWhite,
        text,
        filtersOptions,
        setFilterOption,
        value,
        customKey
    } = props;
    const {selectedOption, handleSelect} = useSelect(
        filtersOptions,
        setFilterOption,
        customKey,
        value
    );

    return (
        <li className=" col-6 panel-icon-container">
            <div
                className={`panel-icon ${selectedOption && "active"}`}
                onClick={handleSelect}
            >
                {selectedOption ? (
                    <IconWhite className="svg-icon"/>
                ) : (
                    <IconDark className="svg-icon"/>
                )}
            </div>
            <span className="panel-icon-text" onClick={handleSelect}>
        {text}
      </span>
        </li>
    );
};

export default AmenitiesIcon;
