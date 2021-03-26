const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const {signIn,signUp,googleFacebookSignIn, getProfile,getWishList,editProfile, changePassword} = require('../controllers/users')

router.post('/signIn',signIn)
router.post('/signUp',signUp)
router.post('/googleFacebookSignIn',googleFacebookSignIn)
router.get('/profile/:id',auth,getProfile)
router.patch('/profile',auth,editProfile)
router.patch('/profile/password',auth,changePassword)
// router.get('/wishList',auth,getWishList);

module.exports = router