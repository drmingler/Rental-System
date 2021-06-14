import {useFormik} from "formik";

export const useForm = (makeRequest, initialValues, validator) => {
  return useFormik({
    initialValues: initialValues,
    validationSchema: validator,
    enableReinitialize : true,
    onSubmit: values => {
      makeRequest(values);
    }
  });
};
