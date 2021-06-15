import {propertyAmenities, propertyStatus} from "./PropertyConstants";

function getPropertyStatus(key) {
  return propertyStatus[key];
}
function addComma(string) {
  if (string) {
    let toNumber = parseFloat(string).toFixed(0);
    let toString = toNumber.toString();
    return toString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export function isEmpty(payload) {
  return payload && Object.keys(payload).length === 0;
}

export const toDate = dateTime => {
  return dateTime
    .toISOString()
    .split("T")[0]
    .toString();
};

export const toFormatedDate = dateString => {
  const dated = new Date(dateString);
  const splitDate = dated.toString().split(" ");
  const year = splitDate[3];
  const date = splitDate.splice(0, 3).join(" ");
  return `${date}, ${year}`;
};

export const pickAmenities = amenities => {
  const validAmenities = [];
  Object.keys(amenities).map(key => {
    if (amenities[key] === true) {
      propertyAmenities.forEach(propertyAmenity => {
        if (propertyAmenity["key"] === key) {
          validAmenities.push(propertyAmenity);
        }
      });
    }
  });
  return validAmenities;
};

export const handleRedirect = (path, history) => {
  return history.push(path);
};

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

export const Capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatDateTime = dateString => {
  const dated = new Date(dateString);
  const splitDate = dated.toString().split(" ");
  const time = splitDate[4];
  const date = splitDate.splice(0, 4).join(" ");
  return `${date}, ${time}`;
};
