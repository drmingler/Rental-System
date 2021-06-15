import {useFormik} from "formik";
import {fetchLocationFromGoogle} from "../api/api";

export const useAddPropertyForm = (makeRequest, initialValues, validator) => {
  return useFormik({
    initialValues: initialValues,
    validationSchema: validator,
    enableReinitialize: true,
    onSubmit: async (values, { setFieldError, setFieldValue }) => {
      if (!values.placeId) {
        return setFieldError(
          "address",
          "Please use an address from the prediction"
        );
      }
      const geometry = await fetchLocationFromGoogle(values.placeId);
      let { lat, lng } = geometry;
      makeRequest(values, lat, lng);
    }
  });
};
