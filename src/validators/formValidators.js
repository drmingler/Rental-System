import * as Yup from "yup";
import {passwordRegExp, phoneRegExp, validateUploads} from "../helpers/utils";

const MAX_SIZE = 1000000;
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
    .matches(
      passwordRegExp,
      "Password must contain 8 or more characters, one uppercase, one lowercase and one number"
    )
    .min(8)
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

// Password reset request  validator
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

// Payment form validator
export const paymentInitialValues = {
  cardHolderName: "",
  cardNumber: "",
  expiry: "",
  cvc: ""
};

export const paymentValidator = Yup.object({
  cardHolderName: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  cardNumber: Yup.string()
    .min(16)
    .max(16)
    .required("Required"),
  expiry: Yup.string()
    // .format("MM/YY")
    .required("Required"),
  cvc: Yup.number()
    .min(3)
    .min(3)
    .required("Required")
});

// Chat form validator
export const chatInitialValues = {
  message: ""
};

export const chatValidator = Yup.object({
  message: Yup.string()
    .min(2, "Must be 2 characters or more")
    .required("Required")
});

// House upload form validator
export const houseUploadInitialValues = {
  propertyName: "",
  address: "",
  numberOfBedrooms: "",
  numberOfBathrooms: "",
  unit: "",
  size: "",
  listingDescription: "",
  availableFrom: "",
  propertyType: "",
  monthlyRent: "",
  securityDeposit: "",
  longitude: "",
  latitude: "",
  images: [],
  files: []
};

export const houseUploadValidator = Yup.object({
  propertyName: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  address: Yup.string().required("Required"),
  numberOfBedrooms: Yup.number().required("Required"),
  numberOfBathrooms: Yup.number().required("Required"),
  size: Yup.number().required("Required"),
  longitude: Yup.number().required("Required"),
  latitude: Yup.number().required("Required"),
  listingDescription: Yup.number()
    .min(50, "Must be 50 characters or more")
    .max(1500, "Must be 1500 characters or less")
    .required("Required"),
  availableFrom: Yup.string().required("Required"),
  propertyType: Yup.string().required("Required"),
  monthlyRent: Yup.number().required("Required"),
  securityDeposit: Yup.number().required("Required"),
  images: Yup.mixed()
    .test("fileFormat", "Unsupported format, upload images only", value => {
      const result = value.map(
        file => !file || (file && SUPPORTED_IMAGE_FORMATS.includes(file.type))
      );
      return !result.includes(false);
    })
    .test(
      "fileSize",
      "File size is too large, Maximum upload size is 5MB",
      value => {
        return validateUploads(value, MAX_SIZE);
      }
    )
    .test("Required", "Property image is required", value => value[0]),
  files: Yup.mixed()
    .test("fileFormat", "Unsupported format, upload files only", value => {
      const result = value.map(
        file => !file || (file && SUPPORTED_FILE_FORMATS.includes(file.type))
      );
      return !result.includes(false);
    })
    .test(
      "fileSize",
      "File size is too large, Maximum upload size is 5MB",
      value => {
        return validateUploads(value, MAX_SIZE);
      }
    )
    .test("Required", "Property image is required", value => value[0])
});
