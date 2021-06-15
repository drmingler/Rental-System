import React from "react";

const PlaceSuggestion = props => {
  const { placePredictions, setActive, showActive, setValue } = props;
  const handlePredictionSelection = (description, place_id) => {
    setValue("address", description);
    setValue("placeId", place_id);
    setActive(false);
  };
  return (
    <ul className="suggestions-dropdown">
      {showActive &&
        placePredictions.map(({ place_id, description, matched_substrings }, index) => {
          let suggestLength = matched_substrings[0].length;
          let matching = description.substring(0, suggestLength);
          let notMatching = description.substring(suggestLength);
          return (
            <li
              key={index}
              onClick={() => handlePredictionSelection(description, place_id)}
            >
              <span>
                <strong>{matching}</strong>
                {notMatching}
              </span>
            </li>
          );
        })}
    </ul>
  );
};
export default PlaceSuggestion;
