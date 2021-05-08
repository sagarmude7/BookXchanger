import {
  FETCH_FAV,
  GET_PROFILE,
  EDIT_PROFILE,
  ERROR,
  CHANGE_PASSWORD,
  FEEDBACK,
  VALID,
  GET_RECENTS,
} from "../constants/actions";
import api from "../api/index";

export const getProfile = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProfile(id);
    dispatch({ type: GET_PROFILE, payload: data });
  } catch (error) {}
};

export const getRecentUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getRecentUsers();
    dispatch({ type: GET_RECENTS, payload: data });
  } catch (err) {}
};
export const editProfile = (userData) => async (dispatch) => {
  try {
    const { data } = await api.editProfile(userData);
    dispatch({ type: EDIT_PROFILE, payload: data });
    dispatch({ type: VALID, payload: { msg: "Profile Updated Successfully" } });
  } catch (error) {
    const data = error.response.data;
    dispatch({ type: ERROR, payload: data });
    dispatch({ type: VALID, payload: data });
  }
};

export const changePassword = (passData) => async (dispatch) => {
  try {
    const { data } = await api.changePassword(passData);
    dispatch({ type: CHANGE_PASSWORD, payload: data });
    dispatch({
      type: VALID,
      payload: { msg: "Password Updated Successfully" },
    });
  } catch (error) {
    const data = error.response.data;
    dispatch({ type: ERROR, payload: data });
    dispatch({ type: VALID, payload: data });
  }
};

export const getWishList = (id) => async (dispatch) => {
  try {
    const { data } = await api.getWishList(id);
    dispatch({ type: FETCH_FAV, payload: data });
  } catch (err) {}
};

export const postFeedBackForm = (feedData) => async (dispatch) => {
  try {
    const { data } = await api.sendMail(feedData);
    dispatch({ type: FEEDBACK, payload: data });
  } catch (err) {
    const data = err.response.data;
    dispatch({ type: FEEDBACK, payload: data });
  }
};
