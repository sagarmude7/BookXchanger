import {
  FETCH_ALL,
  CREATE,
  ADD_FAV,
  UPDATE_SOLD,
  DELETE_BOOK,
  UPDATE_BOOKS,
  VALID,
  DEL_BOOK_WISH,
} from "../constants/actions";
const api = require("../api/index");

export const getBooks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBooks();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {}
};

export const createBookAd = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.createBookAd(formData);
    dispatch({ type: CREATE, payload: data });
    dispatch({ type: VALID, payload: { msg: "Book Posted successfully" } });
    history.push("/");
  } catch (err) {
    const data = err.response.data;
    dispatch({ type: VALID, payload: data });
  }
};

export const addToWishList = (id) => async (dispatch) => {
  try {
    const { data } = await api.addToWishList(id);
    dispatch({ type: ADD_FAV, payload: data });
  } catch (error) {}
};

export const showBookInfo = (bookId) => async (dispatch) => {
  try {
  } catch (error) {}
};

export const updatedIsSold = (bookId) => async (dispatch) => {
  try {
    const { data } = await api.updatedIsSold(bookId);
    dispatch({ type: UPDATE_SOLD, payload: data });
  } catch (error) {}
};

export const deleteaBook = (bookId) => async (dispatch) => {
  try {
    await api.deleteaBook(bookId);
    dispatch({ type: DELETE_BOOK, payload: bookId });
  } catch (err) {}
};

export const editaBook = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.editaBook(id, formData);
    dispatch({ type: UPDATE_BOOKS, payload: data });
  } catch (err) {}
};

export const deleteaBookFromWish = (book) => async (dispatch) => {
  try {
    console.log("Actions Book" + book);
    await api.deleteaBookFromWish(book._id);
    console.log("Actions Book2" + book);
    dispatch({ type: DEL_BOOK_WISH, payload: book });

    // console.log("Book ID is"+ book_id)
    // console.log("Book dispathched SuccessFully")
  } catch (err) {
    console.log(err);
    console.log(err.message);
  }
};
