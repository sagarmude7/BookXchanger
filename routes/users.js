const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const {signIn,signUp,googleFacebookSignIn, getProfile,getWishList,editProfile} = require('../controllers/users')

router.post('/signIn',signIn)
router.post('/signUp',signUp)
router.post('/googleFacebookSignIn',googleFacebookSignIn)
router.get('/profile',auth,getProfile)
router.patch('/:id/profile',editProfile)
router.get('/wishList',auth,getWishList);

module.exports = router