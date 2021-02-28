const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { regValidator, loginValidator } = require('../validators/joi-validator')

exports.signUp = async(req,res)=>{
    const {firstName,lastName,email,college,location,password,confirmPassword} = req.body 

    const {error} = regValidator.validate(req.body)
    try {
        if(error)
            return res.status(400).json({msg:error.details[0].message})

        console.log("Finding if user exists")
        const existingUser = await User.findOne({email:email})
        
        console.log("checked")
        //if existing User is found
        if(existingUser)
            return res.status(400).json({msg:'User already exists with this email'})

        
        if(password!=confirmPassword)
            return res.status(400).json({msg:"Password don't match"})

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({name:`${firstName} ${lastName}`,email:email,password:hashedPassword,createdAt:new Date().toISOString(),college:college,location:location,soldAds:0,Books:[],WishList:[]})

        const payload = {
            email: newUser.email,
            id:newUser._id
        }

        const token = jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn:"1h"})

        return res.status(200).json({profile:newUser,token:token})
    } catch (err) {
        return res.status(500).json({msg:"SOMEThing went wrong"})
    }
}

exports.signIn = async(req,res)=>{
    const {email,password} = req.body
    const {error} = loginValidator.validate(req.body)

    try {
        if(error)
            return res.status(400).json({msg:error.details[0].message})

        const oldUser = await User.findOne({email:email})

        if(!oldUser)
            return res.status(400).json({msg:"User doesn't exist"})
        
        const isPasswordIncorrect = await bcrypt.compare(password,oldUser.password)

        if(isPasswordIncorrect)
            return res.status(400).json({msg:"Password Incorrect"})

        const token = jwt.sign({ profile: oldUser, id: oldUser._id }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
  
        return res.status(200).json({ profile: oldUser, token });
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}