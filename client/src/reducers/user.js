import {
  GET_PROFILE,
  EDIT_PROFILE,
  ERROR,
  CHANGE_PASSWORD,
  FEEDBACK,
} from "../constants/actions";

export default (user = {}, action) => {
  switch (action.type) {
    case GET_PROFILE:
    case EDIT_PROFILE:
      return action.payload;
    case CHANGE_PASSWORD:
      return action.payload;
    case FEEDBACK:
      return action.payload;
    case ERROR:
      return action.payload;
    default:
      return user;
  }
};
