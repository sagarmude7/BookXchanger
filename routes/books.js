const express = require('express')
const router = express.Router()
const {getBooks,createBookAd} = require('../controllers/books')

router.get('/all',getBooks)
router.post('/add',createBookAd)

module.exports = router