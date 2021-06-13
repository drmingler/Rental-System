import * as Yup from "yup";
import {passwordRegExp, phoneRegExp} from "../helpers/utils";

const MAX_SIZE = 700000;
const SUPPORTED_IMAGE_FORMATS = ["image/png", "image/jpg", "image/jpeg"];
const SUPPORTED_FILE_FORMATS = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "application/pdf"
];

// Registration form validation
export const regInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

export const registrationValidator = Yup.object({
  firstName: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(12, "Phone number not valid")
    .min(10, "Phone number not valid"),
  password: Yup.string()
    .required("Required")
    .min(8)
    .matches(
      passwordRegExp,
      "Password must contain 8 or more characters, one uppercase, one lowercase and one number"
    )
});

// Login form validation

export const loginInitialValues = {
  email: "",
  password: ""
};

export const loginValidator = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string().required("Required")
});

// Password reset Rrequest  validator
export const emailInitialValues = {
  email: ""
};

export const emailValidator = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required")
});

// Password reset validator

export const passwordResetInitialValues = {
  new_password: "",
  re_new_password: ""
};

export const passwordResetValidator = Yup.object({
  new_password: Yup.string()
    .required("Required")
    .min(8)
    .matches(
      passwordRegExp,
      "Password must contain 8 or more characters, one uppercase, one lowercase and one number"
    ),
  re_new_password: Yup.string()
    .required("Required")
    .min(8)
    .matches(passwordRegExp, "Passwords must match", value => {
      return this.parent.password === value;
    })
});

// Update profile validation

export const updateDetailsValidator = Yup.object({
  firstName: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  birthDate: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  gender: Yup.string().required("Required"),
  nationality: Yup.string().required("Required"),
  occupation: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required")
    .max(12, "Phone number not valid")
    .min(10, "Phone number not valid"),
  avatar: Yup.mixed()
    .notRequired()
    .test(
      "fileSize",
      "Unsupported format, upload images only",
      value =>
        !value ||
        (value => value && SUPPORTED_IMAGE_FORMATS.includes(value.type))
    )
    .test(
      "fileFormat",
      "File size is too large, maximum upload size is 700KB",
      value => !value || (value && value.size <= MAX_SIZE)
    )
});
