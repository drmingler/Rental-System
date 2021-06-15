import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import useDetectClickOutsideTarget from "./useDetectClickOutsideTarget";
import {API_KEY} from "../api/apiUtils";

const useGoogleSuggestions = () => {
  const { placePredictions, getPlacePredictions } = useGoogle({
    apiKey: API_KEY,
    options: {
      types: ["geocode"],
      componentRestrictions: { country: "ng" }
    }
  });

  const { showActive, setActive, innerRef } = useDetectClickOutsideTarget();

  return {
    showActive,
    setActive,
    innerRef,
    placePredictions,
    getPlacePredictions
  };
};

export default useGoogleSuggestions;
