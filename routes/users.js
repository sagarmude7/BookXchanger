const express = require('express')
const router = express.Router()
const {signIn,signUp,googleFacebookSignIn} = require('../controllers/users')

router.post('/signIn',signIn)
router.post('/signUp',signUp)
router.post('/googleFacebookSignIn',googleFacebookSignIn)

module.exports = router