const express = require('express')
const router = express.Router()
// const cors = require('cors')
const {getBooks,createBookAd,addToWishList,getWishList,showBookInfo} = require('../controllers/books')
const auth = require('../middleware/auth')

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

router.get('/all',getBooks)
router.get('/:bookId',auth,showBookInfo)
router.post('/add',auth,createBookAd)
router.patch('/:id/addWishList',auth,addToWishList)


module.exports = router