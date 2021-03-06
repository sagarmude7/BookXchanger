const express = require('express')
const router = express.Router()
const {signIn,signUp,googleFacebookSignIn, getProfile} = require('../controllers/users')

router.post('/signIn',signIn)
router.post('/signUp',signUp)
router.post('/googleFacebookSignIn',googleFacebookSignIn)
router.get('/:id/profile',getProfile)

module.exports = router