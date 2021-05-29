import React from "react";
import useDetectClickOutsideTarget from "../../hooks/useDetectClickOutsideTarget";

const GoogleMapSearch = () => {
    const {showActive, setActive, innerRef} = useDetectClickOutsideTarget();

    return (
        <div className="input-container" ref={innerRef}>
            <input
                placeholder="Where do you want to live?"
                type="text"
                onClick={() => setActive(!showActive)}
            />
            <ul
                className={`location-dropdown ${showActive &&
                "location-dropdown-enter"}`}
            >
                <li> Abuja</li>
                <li> Lagos</li>
                <li> Jos</li>
                <li> Port Harcourt</li>
                <li> Enugu</li>
                <li> Ibadan</li>
            </ul>
        </div>
    );
};
export default GoogleMapSearch;
