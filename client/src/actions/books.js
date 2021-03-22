import {
  FETCH_ALL,
  CREATE,
  ADD_FAV,
  GET_BOOK,
  UPDATE_SOLD,
} from "../constants/actions";
const api = require("../api/index");

export const getBooks = () => async (dispatch) => {
  try {
    //get data from api
    const { data } = await api.fetchBooks();
    //console.log(data)
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    // console.log("Some error occured")
    console.log(err);
  }
};

export const createBookAd = (formData) => async (dispatch) => {
  try {
    console.log("Hello");
    const { data } = await api.createBookAd(formData);
    console.log("Book created");
    console.log(data);
    dispatch({ type: CREATE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const addToWishList = (id) => async (dispatch) => {
  try {
    const { data } = await api.addToWishList(id);
    console.log(data);
    dispatch({ type: ADD_FAV, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const showBookInfo = (bookId) => async (dispatch) => {
  try {
    // console.log("Action here");
    // console.log(bookId);
    // const { data } = await api.showBookInfo(bookId);
    // console.log("Inside actions, data from API is");
    // dispatch({ type: GET_BOOK, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatedIsSold = (bookId) => async (dispatch) => {
  try {
    console.log("in isSold actions");
    const { data } = await api.updatedIsSold(bookId);
    console.log(data);
    dispatch({ type: UPDATE_SOLD, payload: data });
  } catch (error) {
    console.log(error);
  }
};
