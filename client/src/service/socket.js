import io from "socket.io-client";
const ENDPOINT = "https://bookxchanger-app.herokuapp.com";

// autoConnect is false — call socket.connect() after setting socket.auth.token
export const socket = io(ENDPOINT, { autoConnect: false });
