import { GET_RECENTS } from "../constants/actions";

export default (recents = [], action) => {
  switch (action.type) {
    case GET_RECENTS:
      return action.payload;
    default:
      return recents;
  }
};
