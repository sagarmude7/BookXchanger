import io from "socket.io-client";
const ENDPOINT = "https://bookxchanger-app.herokuapp.com";

export const socket = io(ENDPOINT, { autoConnect: false });
