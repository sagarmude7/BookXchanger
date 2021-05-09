import { FETCH_FAV } from "../constants/actions";

export default (wishList = [], action) => {
  switch (action.type) {
    case FETCH_FAV:
      return action.payload;
    default:
      return wishList;
  }
};
