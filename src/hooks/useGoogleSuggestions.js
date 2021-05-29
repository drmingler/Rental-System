import {useState} from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import useDetectClickOutsideTarget from "./useDetectClickOutsideTarget";

const useGoogleSuggestions = () => {
  const {placePredictions, getPlacePredictions} = useGoogle({
    apiKey: "",
    options: {
      types: ["geocode"],
      componentRestrictions: {country: "ng"}
    }
  });

  const {showActive, setActive, innerRef} = useDetectClickOutsideTarget();
  const [value, setValue] = useState("");
  return {
    showActive,
    setActive,
    innerRef,
    value,
    setValue,
    placePredictions,
    getPlacePredictions
  };
};

export default useGoogleSuggestions;
