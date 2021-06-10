// import testImage1 from "../assets/img/property-image-1.jpg";
// import testImage2 from "../assets/img/property-image-2.jpg";
// import axios from "axios";
//
// export let authHeader = {
//   Authorization:
//     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3NDc3NDYyLCJqdGkiOiI1ODU3NzdmYmIxZTA0OWRiOWZmY2EyODY1OGM3ZTA0YSIsInVzZXJfaWQiOjMyfQ.wcaWijzyqP-Ik4JoaEB8RUb2M_gf-BCUwJu06lRX_uQ"
// };
// // console.log(test_token)
// // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3NzM1NjcwLCJqdGkiOiIxMGY1NGY0MTgwOWQ0Y2UyODFiYzExN2E2MzE2NTJhNyIsInVzZXJfaWQiOjMyfQ.Go7nS__eO6TdSxSf7aV6dA8fC0rzmMEEuNAZzJYDQ6I"
// // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3ODAyNTY4LCJqdGkiOiI2OGY1Zjc5YzM0YzY0MDQ1YTIyZTI3YzAxYTJmNWU2NyIsInVzZXJfaWQiOjF9.tWH4TdOZwoFexdasZFBojWOrOW9sDhTAhXw6HH7ZYMs"
//
// let dataSet = {
//   propertyName: "emma",
//   numberOfBedrooms: 20,
//   numberOfBathrooms: 10,
//   listingDescription: "",
//   availableFrom: "2021-03-29",
//   isOwnerShipVerified: true,
//   unit: 0,
//   size: 0.0,
//   propertyType: "apartment",
//   monthlyRent: 0.0,
//   securityDeposit: 0.0,
//   propertyAddress: {
//     address: "Szigeti út 6b 7624 Pécs Hungary",
//     stateName: "Jos",
//     latitude: 70.0,
//     longitude: 80.0
//   },
//   // propertyImage: [],
//   propertyAmenities: {
//     pool: true,
//     garden: true,
//     elevator: true,
//     doorman: false,
//     dryer: false,
//     deck: false,
//     washer: false,
//     gym: false,
//     parking: false,
//     firePlace: false,
//     airCondition: false,
//     dishWasher: true,
//     itemStorage: false,
//     wheelchair: false,
//     balcony: false,
//     hardFloor: false,
//     furnished: false,
//     view: false,
//     highRise: false,
//     studentFriendly: false,
//     utilities: false,
//     property: 5
//   },
//   propertyRules: {
//     smoking: true,
//     pet: true,
//     musicalInstruments: false,
//     property: 5
//   }
// };
// export let dataRequest = new FormData();
// for (let key of Object.keys(dataRequest)) {
//   dataRequest.append(key, dataSet[key]);
// }
// dataRequest.append("propertyImage", testImage1);
// dataRequest.append("propertyImage", testImage2);
//
// // const uri = `http://127.0.0.1:8000/api/property/edit/`;
// // axios.post(uri, data, { headers: authHeader}).then(response => response.data)
//
// export async function searchEachAdmin(payload) {
//   const uri = `http://127.0.0.1:8000/api/property/edit/`;
//   return await axios
//     .post(uri, payload, { headers: authHeader })
//     .then(response => response.data);
// }
//
// let test_token = localStorage.getItem("token")
// let user_id = localStorage.getItem("user_id")
// let token = test_token ? test_token.split(" ")[1] :  ""
//
// export const socket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${user_id}/?token=${token}`);
