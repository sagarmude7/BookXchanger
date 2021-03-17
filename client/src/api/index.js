const axios = require('axios')

const API = axios.create({ baseURL: 'http://localhost:5000/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

const urlBooks = '/books';

const fetchBooks = ()=>API.get(`${urlBooks}/all`)

const createBookAd = (formData)=>API.post(`${urlBooks}/add`,formData)

const addToWishList = (id)=>API.patch(`${urlBooks}/${id}/addWishList`,id)

const showBookInfo = (id)=>API.get(`${urlBooks}/${id}/bookInfo`,id);

// '${urlBooks}/userBooks'
const urlUsers = '/users';

const signUp = (formData)=>API.post(`${urlUsers}/signUp`,formData)
const signIn = (formData)=>API.post(`${urlUsers}/signIn`,formData)

const googleFacebookSignIn = (formData)=>API.post(`${urlUsers}/googleFacebookSignIn`,formData);

const getProfile = (id)=>API.get(`${urlUsers}/profile`);
const editProfile = (id,updatedUser)=>API.patch(`${urlUsers}/profile`,updatedUser);

const getWishList = (id)=>API.get(`${urlUsers}/wishList`)

module.exports = {fetchBooks,createBookAd,signUp,signIn,googleFacebookSignIn,addToWishList,getWishList,getProfile,editProfile,showBookInfo}

