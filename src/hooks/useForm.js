import {useFormik} from "formik";

export const useForm = (makeRequest, initialValues, validator) => {
  return useFormik({
    initialValues: initialValues,
    validationSchema: validator,
    onSubmit: values => {
      makeRequest(values);
    }
  });
};
