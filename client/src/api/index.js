const axios = require("axios");

const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

const urlBooks = "/books";

const fetchBooks = () => API.get(`${urlBooks}/all`);

const createBookAd = (formData) => API.post(`${urlBooks}/add`, formData);

const addToWishList = (id) => API.patch(`${urlBooks}/${id}/addWishList`, id);

const showBookInfo = (bookId) => API.get(`${urlBooks}/book/${bookId}`);

const updatedIsSold = (bookId) =>API.patch(`${urlBooks}/${bookId}/sold`);

const deleteaBook = (bookId)=>API.delete(`${urlBooks}/${bookId}`)

const editaBook = (id,formData)=>API.patch(`${urlBooks}/${id}`,formData)

// '${urlBooks}/userBooks'
const urlUsers = "/users";

const signUp = (formData) => API.post(`${urlUsers}/signUp`, formData);
const signIn = (formData) => API.post(`${urlUsers}/signIn`, formData);

const googleFacebookSignIn = (formData) => API.post(`${urlUsers}/googleFacebookSignIn`, formData);

const getProfile = (id) => API.get(`${urlUsers}/profile/${id}`);
const getRecentUsers = ()=> API.get(`${urlUsers}/profile/messages`)
const editProfile = (updatedUser) => API.patch(`${urlUsers}/profile`, updatedUser);
const changePassword = (updatedPassword) => API.patch(`${urlUsers}/profile/password`, updatedPassword);

const sendMail = (feedData) => API.post(`${urlUsers}/send-email`,feedData);
// const getWishList = (id) => API.get(`${urlUsers}/wishList`);
const deleteaBookFromWish = (book_id,localUser) => API.delete(`${urlUsers}/${book_id}`,localUser)

module.exports = {
  fetchBooks,
  createBookAd,
  signUp,
  signIn,
  googleFacebookSignIn,
  addToWishList,
  getProfile,
  editProfile,
  showBookInfo,
  updatedIsSold,
  deleteaBook,
  editaBook,
  changePassword,
  sendMail,
  getRecentUsers,
  deleteaBookFromWish
};
