import {useFormik} from "formik";

export const useForm = (makeRequest, initialValues, validator) => {
  return useFormik({
    initialValues: initialValues,
    validationSchema: validator,
    onSubmit: (values, { resetForm }) => {
      makeRequest(values);
      return resetForm();
    }
  });
};
