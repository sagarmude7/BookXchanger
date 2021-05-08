import { ADD_CHAT, INITIAL_CHAT } from "../constants/actions";

export default (chats = [], action) => {
  switch (action.type) {
    case INITIAL_CHAT:
      return action.payload;
    case ADD_CHAT:
      return [...chats, action.payload];
    default:
      return chats;
  }
};
