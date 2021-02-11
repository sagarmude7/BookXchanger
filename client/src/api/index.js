const axios = require('axios')

const API = axios.create({ baseURL: 'http://localhost:5000/' });


const urlBooks = '/books';

const fetchBooks = ()=>API.get(`${urlBooks}/all`)

const createBookAd = (formData)=>API.post(`${urlBooks}/add`,formData)

module.exports = {fetchBooks,createBookAd}