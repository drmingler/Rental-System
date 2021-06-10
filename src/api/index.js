import {MakeApiCall, methods, URI} from "./apiUtils";

async function CreateUser(user) {
  const uri = `${URI}/auth/users/`;
  return MakeApiCall(uri, user, methods.POST);
}

async function Login(user) {
  const uri = `${URI}/auth/jwt/create/`;
  return MakeApiCall(uri, user, methods.POST);
}

async function FetchUserProfile(userId) {
  const uri = `${URI}/api/account/${userId}/`;
  return MakeApiCall(uri, {}, methods.GET);
}

async function UpdateUserProfile(userId, user) {
  const uri = `${URI}/api/account/${userId}/`;
  return MakeApiCall(uri, user, methods.PUT);
}

async function FetchLandlordProfile(landlordId) {
  const uri = `${URI}/api/landlord/${landlordId}/`;
  return MakeApiCall(uri, {}, methods.GET);
}

async function FetchConversation() {
  const uri = `${URI}/api/conversation/`;
  return MakeApiCall(uri, {}, methods.GET);
}

async function FetchLastMessages() {
  const uri = `${URI}/api/last-message/`;
  return MakeApiCall(uri, {}, methods.GET);
}

async function CreateProperty(property) {
  const uri = `${URI}/api/property/`;
  return MakeApiCall(uri, property, methods.POST);
}
async function UpdateProperty(property, propertyId) {
  const uri = `${URI}/api/property/${propertyId}/`;
  return MakeApiCall(uri, property, methods.PUT);
}
async function DeleteProperty(propertyId) {
  const uri = `${URI}/api/property/${propertyId}/`;
  return MakeApiCall(uri, {}, methods.DELETE);
}

async function GetProperties() {
  const uri = `${URI}/api/property-search/`;
  return MakeApiCall(uri, {}, methods.GET);
}

async function GetProperty(propertyId) {
  const uri = `${URI}/api/property-view/${propertyId}/`;
  return MakeApiCall(uri, {}, methods.GET);
}

async function UploadObject(payload) {
  const uri = `${URI}/api/property-media-upload/`;
  return MakeApiCall(uri, payload, methods.POST);
}

async function DeletePropertyImage(ObjectId) {
  const uri = `${URI}/api/property-media-upload/?${ObjectId}`;
  return MakeApiCall(uri, {}, methods.DELETE);
}

async function GetLocationCoordinates(locationName) {
  const uri = `${URI}/api/location/?${locationName}`;
  return MakeApiCall(uri, {}, methods.GET);
}

async function SearchProperties(query) {
  const uri = `${URI}/api/search/?${query}`;
  return MakeApiCall(uri, {}, methods.GET);
}

async function GetTransactionsHistory() {
  const uri = `${URI}/api/transaction-history/`;
  return MakeApiCall(uri, {}, methods.GET);
}

async function CreateSubscription(payload) {
  const uri = `${URI}/api/subscription/`;
  return MakeApiCall(uri, payload, methods.POST);
}

export {
  CreateUser,
  Login,
  FetchUserProfile,
  UpdateUserProfile,
  FetchLandlordProfile,
  FetchConversation,
  FetchLastMessages,
  CreateProperty,
  UpdateProperty,
  DeleteProperty,
  GetProperties,
  GetProperty,
  UploadObject,
  DeletePropertyImage,
  GetLocationCoordinates,
  SearchProperties,
  GetTransactionsHistory,
  CreateSubscription
};
