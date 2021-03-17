const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { WishList } = require('../models/WishList')
const jwt = require('jsonwebtoken')
const { regValidator, loginValidator } = require('../validators/joi-validator')


exports.signUp = async(req,res)=>{
    // console.log(req.body)
    const {firstName,lastName,email,college,location,password,confirmPassword} = req.body 
    console.log(password)
    const {error} = regValidator.validate(req.body)
    console.log(error)
    try {
        if(error)
            return res.status(400).json({msg:error.details[0].message})
        console.log("Hello")
        console.log("Finding if user exists")
        const existingUser = await User.findOne({email:email})
        
        console.log("checked")
        //if existing User is found
        if(existingUser)
            return res.status(400).json({msg:'User already exists with this email'})

        
        if(password!=confirmPassword)
            return res.status(400).json({msg:"Password don't match"})

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({name:`${firstName} ${lastName}`,email:email,password:hashedPassword,createdAt:new Date().toISOString(),college:college,location:location,soldAds:0,books:[]})

        const payload = {
            email: newUser.email,
            id:newUser._id
        }

        const token = jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn:"1h"})

        return res.status(200).json({ profile: {name:newUser.name,email:newUser.email,id:newUser._id}, token })
    } catch (err) {
        return res.status(500).json({msg:"SOMEThing went wrong"})
    }
}

exports.signIn = async(req,res)=>{
    const {email,password} = req.body
    console.log(password)
    const {error} = loginValidator.validate(req.body)

    try {
        if(error)
            return res.status(400).json({msg:error.details[0].message})
        
        const oldUser = await User.findOne({email:email})
        // console.log(oldUser)
        
        if(!oldUser)
            return res.status(400).json({msg:"User doesn't exist"})
        
        const isPasswordIncorrect = await bcrypt.compare(password,oldUser.password)

        if(!isPasswordIncorrect)
            return res.status(400).json({msg:"Password Incorrect"})

        const token = jwt.sign({ profile: oldUser, id: oldUser._id }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
        
        return res.status(200).json({ profile: {name:oldUser.name,email:oldUser.email,id:oldUser._id}, token });
    } catch (err) {
        return res.status(500).json({ msg: "Something went wrong" });
    }
}

//utility function to generate a random password
function random_password_generate(max,min)
{
    var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return randPassword;
}

exports.googleFacebookSignIn = async(req,res)=>{
    const {email,name,profilePic} = req.body
    // console.log(email)
    try{
        const oldUser = await User.findOne({email:email})

        

        if(!oldUser){
            const password = random_password_generate(20,10);
            // console.log(name);
            //siMrjVb44!QFG
            // console.log(password);
            const hashedPassword = await bcrypt.hash(password,10);
            // console.log(hashedPassword)
            const newUser = await User.create({name,email,password:hashedPassword,profilePic,createdAt:new Date().toISOString(),college:'ABC',location:'DEF',soldAds:0,books:[]})

            // console.log("newUser",newUser);
            const payload = {
                email: newUser.email,
                id:newUser._id
            }

            const token = jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn:"1h"})

            return res.status(200).json({ profile: {name:newUser.name,email:newUser.email,profilePic:newUser.profilePic,id:newUser._id}, token })
        }

        const updatedUser = await User.findOneAndUpdate({email:email},{profilePic:profilePic},{new:true})
        // console.log(updatedUser);
        updatedUser.save()
        const token = jwt.sign({ profile: updatedUser, id: oldUser._id },process.env.TOKEN_SECRET, { expiresIn: "1h" });
        // console.log("Hello,token generated")
        return res.status(200).json({ profile: {name:updatedUser.name,email:updatedUser.email,profilePic:updatedUser.profilePic,id:updatedUser._id}, token });
    }catch(err){
        return res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.getProfile = async(req,res)=>{

    try{
        const user = await User.findById(req.userId);
        console.log(user)
        res.status(200).json(user);
    }catch(err){
        return res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.editProfile = async(req,res)=>{
    const {name, email, college, location} = req.body;

    try{
        const updateData = {name, email, college, location};

        const updatedUser = await User.findByIdAndUpdate(req.userId,updateData,{new:true})
        
        console.log("in controllers",updatedUser);

        return res.status(200).json(updatedUser);
    }catch(err){
        return res.status(500).json({ msg: "Something went wrong" });
    }
}


exports.getWishList = async(req,res)=>{
    try{
        const wishList = await WishList.find({adder:req.userId})
        console.log(wishList);
        return res.status(200).json(wishList)
    }catch(err){
        return res.status(500).json({ msg: "Something went wrong" });
    }
}
