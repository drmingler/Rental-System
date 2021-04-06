import testImage1 from "../assets/img/property-image-1.jpg";
import testImage2 from "../assets/img/property-image-2.jpg";
import axios from "axios";

export let authHeader = {
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3NDc3NDYyLCJqdGkiOiI1ODU3NzdmYmIxZTA0OWRiOWZmY2EyODY1OGM3ZTA0YSIsInVzZXJfaWQiOjMyfQ.wcaWijzyqP-Ik4JoaEB8RUb2M_gf-BCUwJu06lRX_uQ"
};
let dataSet = {
  propertyName: "emma",
  numberOfBedrooms: 20,
  numberOfBathrooms: 10,
  listingDescription: "",
  availableFrom: "2021-03-29",
  isOwnerShipVerified: true,
  unit: 0,
  size: 0.0,
  propertyType: "apartment",
  monthlyRent: 0.0,
  securityDeposit: 0.0,
  propertyAddress: {
    address: "Szigeti út 6b 7624 Pécs Hungary",
    stateName: "Jos",
    latitude: 70.0,
    longitude: 80.0
  },
  // propertyImage: [],
  propertyAmenities: {
    pool: true,
    garden: true,
    elevator: true,
    doorman: false,
    dryer: false,
    deck: false,
    washer: false,
    gym: false,
    parking: false,
    firePlace: false,
    airCondition: false,
    dishWasher: true,
    itemStorage: false,
    wheelchair: false,
    balcony: false,
    hardFloor: false,
    furnished: false,
    view: false,
    highRise: false,
    studentFriendly: false,
    utilities: false,
    property: 5
  },
  propertyRules: {
    smoking: true,
    pet: true,
    musicalInstruments: false,
    property: 5
  }
};
export let dataRequest = new FormData();
for (let key of Object.keys(dataRequest)) {
  dataRequest.append(key, dataSet[key]);
}
dataRequest.append("propertyImage", testImage1);
dataRequest.append("propertyImage", testImage2);

// const uri = `http://127.0.0.1:8000/api/property/edit/`;
// axios.post(uri, data, { headers: authHeader}).then(response => response.data)

export async function searchEachAdmin(payload) {
  const uri = `http://127.0.0.1:8000/api/property/edit/`;
  return await axios
    .post(uri, payload, { headers: authHeader })
    .then(response => response.data);
}
