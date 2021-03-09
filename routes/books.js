const express = require('express')
const router = express.Router()
const {getBooks,createBookAd} = require('../controllers/books')
const auth = require('../middleware/auth')

router.get('/all',getBooks)
router.post('/add',auth,createBookAd)


module.exports = router