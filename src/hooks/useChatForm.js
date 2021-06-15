import {useFormik} from "formik";

export const useChatForm = (makeRequest, initialValues, validator) => {
  return useFormik({
    initialValues: initialValues,
    validationSchema: validator,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      makeRequest(values);
      resetForm();
    }
  });
};
