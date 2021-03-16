const express = require('express')
const router = express.Router()
const {signIn,signUp,googleFacebookSignIn, getProfile,editProfile} = require('../controllers/users')
const auth = require('../middleware/auth')

router.post('/signIn',signIn)
router.post('/signUp',signUp)
router.post('/googleFacebookSignIn',googleFacebookSignIn)
router.get('/profile',auth,getProfile)
router.patch('/:id/profile',editProfile)

module.exports = router