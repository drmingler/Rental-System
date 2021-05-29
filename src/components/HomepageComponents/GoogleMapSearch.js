import React from "react";
import {PlaceSuggestion} from "../CommonComponents";
import useGoogleSuggestions from "../../hooks/useGoogleSuggestions";

const GoogleMapSearch = () => {
    const {
        showActive,
        setActive,
        innerRef,
        value,
        setValue,
        placePredictions,
        getPlacePredictions
    } = useGoogleSuggestions();

    return (
        <div className="input-container" ref={innerRef}>
            <input
                placeholder="Where do you want to live?"
                type="text"
                value={value}
                onChange={evt => {
                    getPlacePredictions({input: evt.target.value});
                    setValue(evt.target.value);
                    setActive(true);
                }}
                onClick={() => setActive(!showActive)}
            />
            <ul
                className={`location-dropdown ${!value &&
                showActive &&
                "location-dropdown-enter"}`}
            >
                <li> Abuja</li>
                <li> Lagos</li>
                <li> Jos</li>
                <li> Port Harcourt</li>
                <li> Enugu</li>
                <li> Ibadan</li>
            </ul>
            <PlaceSuggestion
                placePredictions={placePredictions}
                setActive={setActive}
                showActive={showActive}
                setValue={setValue}
            />
        </div>
    );
};
export default GoogleMapSearch;
