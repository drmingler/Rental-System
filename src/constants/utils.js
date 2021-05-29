import {propertyStatus} from "./PropertyConstants";

function getPropertyStatus(key) {
  return propertyStatus[key];
}

function addComma(string) {
  return string.toLocaleString();
}

export {getPropertyStatus, addComma};
