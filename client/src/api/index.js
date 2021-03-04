const axios = require('axios')

const API = axios.create({ baseURL: 'http://localhost:5000/' });


const urlBooks = '/books';

const fetchBooks = ()=>API.get(`${urlBooks}/all`)

const createBookAd = (formData)=>API.post(`${urlBooks}/add`,formData)

const urlUsers = '/users';

const signUp = (formData)=>API.post(`${urlUsers}/signUp`,formData)
const signIn = (formData)=>API.post(`${urlUsers}/signIn`,formData)

const googleFacebookSignIn = (formData)=>API.post(`${urlUsers}/googleFacebookSignIn`,formData);

module.exports = {fetchBooks,createBookAd,signUp,signIn,googleFacebookSignIn}