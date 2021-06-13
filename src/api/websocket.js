import {removeBearer, SOCKET_URI} from "./apiUtils";

const token = localStorage.getItem("token");
let cleanedToken = removeBearer(token);

export const ConnectToSocket = (otherUserId) => {
  return new WebSocket(`${SOCKET_URI}${otherUserId}/?token=${cleanedToken}`);
};
