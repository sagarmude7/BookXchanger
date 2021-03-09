const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { regValidator, loginValidator } = require('../validators/joi-validator')

exports.signUp = async(req,res)=>{
    const {firstName,lastName,email,college,location,password,confirmPassword} = req.body 
    console.log(password)
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
    console.log(password)
    const {error} = loginValidator.validate(req.body)

    try {
        if(error)
            return res.status(400).json({msg:error.details[0].message})

        const oldUser = await User.findOne({email:email})
        console.log(oldUser)
        if(!oldUser)
            return res.status(400).json({msg:"User doesn't exist"})
        
        const isPasswordIncorrect = await bcrypt.compare(password,oldUser.password)

        if(!isPasswordIncorrect)
            return res.status(400).json({msg:"Password Incorrect"})

        const token = jwt.sign({ profile: oldUser, id: oldUser._id }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
  
        return res.status(200).json({ profile: oldUser, token });
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
    console.log(email)
    try{
        const oldUser = await User.findOne({email:email})

        

        if(!oldUser){
            const password = random_password_generate(20,10);
            console.log(name);
            //siMrjVb44!QFG
            console.log(password);
            const hashedPassword = await bcrypt.hash(password,10);
            console.log(hashedPassword)
            const newUser = await User.create({name,email,password:hashedPassword,profilePic,createdAt:new Date().toISOString(),college:'ABC',location:'DEF',soldAds:0,Books:[],WishList:[]})

            console.log("newUser",newUser);
            const payload = {
                email: newUser.email,
                id:newUser._id
            }

            const token = jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn:"1h"})

            return res.status(200).json({profile:newUser,token:token})
        }

        const updatedUser = await User.findOneAndUpdate({email:email},{profilePic:profilePic},{new:true})
        console.log(updatedUser);
        updatedUser.save()
        const token = jwt.sign({ profile: updatedUser, id: oldUser._id },process.env.TOKEN_SECRET, { expiresIn: "1h" });
        // console.log("Hello,token generated")
        return res.status(200).json({ profile: updatedUser, token });
    }catch(err){
        return res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.getProfile = async(req,res)=>{
    const {id :_id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No user with id`);

    const user = await User.findById(_id);

    res.json(user);
}