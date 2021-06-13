import {propertyStatus} from "./PropertyConstants";

function getPropertyStatus(key) {
  return propertyStatus[key];
}

function addComma(string) {
  return string.toLocaleString();
}

export { getPropertyStatus, addComma };

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

export function validateUploads(value, MAX_SIZE) {
  const result = value.map(file => (file ? file.size : 0));

  const sum = result.reduce(function(a, b) {
    return a + b;
  }, 0);

  return sum <= MAX_SIZE;
}
