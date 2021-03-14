const express = require('express')
const router = express.Router()
// const cors = require('cors')
const {getBooks,createBookAd,addToWishList} = require('../controllers/books')
const auth = require('../middleware/auth')

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

router.get('/all',getBooks)
router.post('/add',auth,createBookAd)
router.post('/:id/addWishList',addToWishList)

module.exports = router