const express = require('express')
const router = express.Router()
const {getBooks,createBookAd,addToWishList} = require('../controllers/books')
const auth = require('../middleware/auth')

router.get('/all',getBooks)
router.post('/add',auth,createBookAd)
router.patch('/:id:/addWishList',auth,addToWishList)

module.exports = router