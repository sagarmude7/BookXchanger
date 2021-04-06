const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const { regValidator, loginValidator, editValidator, changePasswordValidator,feedBackValidator } = require('../validators/joi-validator')


exports.signUp = async(req,res)=>{
    // console.log(req.body)
    const {firstName,lastName,email,college,location,password,confirmPassword} = req.body 
    console.log(password)
    const {error} = regValidator.validate(req.body)
    console.log(error)
    try {
        if(error)
            return res.status(400).json({msg:error.details[0].message})
        
        const existingUser = await User.findOne({email:email})
        
        //if existing User is found
        if(existingUser)
            return res.status(400).json({msg:'User already exists with this email'})

        
        if(password!=confirmPassword)
            return res.status(400).json({msg:"Password don't match"})

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({name:`${firstName} ${lastName}`,email:email,password:hashedPassword,createdAt:new Date().toISOString(),college:college,location:location,postedBooks:[]})

        const payload = {
            email: newUser.email,
            id:newUser._id
        }

        const token = jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn:"4h"})

        console.log("New User created using sign Up")
        return res.status(200).json({ profile: {name:newUser.name,email:newUser.email,id:newUser._id}, token })
    } catch (err) {
        return res.status(500).json({msg:"SomeThing went wrong"})
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
        
        if(!oldUser)
            return res.status(400).json({msg:"User doesn't exist"})
        
        const isPasswordIncorrect = await bcrypt.compare(password,oldUser.password)

        if(!isPasswordIncorrect)
            return res.status(400).json({msg:"Password Incorrect"})

        const token = jwt.sign({ profile: oldUser, id: oldUser._id }, process.env.TOKEN_SECRET, { expiresIn: "4h" });
        console.log("User Signed In Normally")
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
            const newUser = await User.create({name,email,password:hashedPassword,profilePic,createdAt:new Date().toISOString(),college:'ABC',location:'DEF',postedBooks:[]})

            // console.log("newUser",newUser);
            const payload = {
                email: newUser.email,
                id:newUser._id
            }

            const token = jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn:"4h"})

            return res.status(200).json({ profile: {name:newUser.name,email:newUser.email,profilePic:newUser.profilePic,id:newUser._id}, token })
        }

        const updatedUser = await User.findOneAndUpdate({email:email},{profilePic:profilePic},{new:true})
        
        updatedUser.save()
        const token = jwt.sign({ profile: updatedUser, id: oldUser._id },process.env.TOKEN_SECRET, { expiresIn: "4h" });
        
        console.log("User Signed In using Google")
        return res.status(200).json({ profile: {name:updatedUser.name,email:updatedUser.email,profilePic:updatedUser.profilePic,id:updatedUser._id}, token });
    }catch(err){
        return res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.getProfile = async(req,res)=>{
    try{
        const {id} = req.params;
        
        const user = await User.findById(id);
        console.log("Users Details Found")
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.editProfile = async(req,res)=>{
    const {name, email, college, location, profilePic} = req.body;
    const {error} = editValidator.validate(req.body);
    console.log("in cont",profilePic);
    try{
        if(error)
            return res.status(400).json({msg:error.details[0].message})
        const updateData = {name, email, college, location, profilePic};
        
        const updatedUser = await User.findByIdAndUpdate(req.userId,updateData,{new:true})
        
        console.log(updatedUser,"Profile Updated successfully!");
        return res.status(200).json(updatedUser);
    }catch(err){
        return res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.changePassword = async(req,res)=>{
    const {currentPassword, newPassword, confirmPassword} = req.body;
    
    const {error} = changePasswordValidator.validate(req.body);

    try{

        if(error)
            return res.status(400).json({msg:error.details[0].message})

        const user = await User.findById(req.userId);
        const isPasswordcorrect = await bcrypt.compare(currentPassword,user.password)

        if(!isPasswordcorrect)
            return res.status(400).json({msg:"Password Incorrect"})

        if(newPassword!=confirmPassword)
            return res.status(400).json({msg:"Password don't match"})

        const hashedPassword = await bcrypt.hash(newPassword,10);
        const updatedPassword = {password:hashedPassword};
        

        const updatedUser = await User.findByIdAndUpdate(req.userId,updatedPassword,{new:true})
        
        

        return res.status(200).json(updatedUser);
    }catch(err){
        return res.status(500).json({ msg: "Something went wrong" });
    }
}

// exports.getWishList = async(req,res)=>{
//     try{
//         const wishList = await WishList.find({adder:req.userId})
//         // console.log(wishList);
//         console.log("Getting the wishlist of user")
//         return res.status(200).json(wishList)
//     }catch(err){
//         return res.status(500).json({ msg: "Something went wrong" });
//     }
// }

exports.sendMail = async(req,res)=>{
    const {error} = feedBackValidator.validate(req.body)
    console.log(error)
    try{
        if(error)
            return res.status(400).json({msg:error.details[0].message,severity:"error"})
        const receiver = 'bookxchanger7@gmail.com';
        const message = req.body.message;
        const subject = `Feedback from ${req.body.name}-${req.body.email}`

        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:'reply.bookxchanger@gmail.com',
                pass:'Book@12341234'
            }
        })

        const mailOptions = {
            from:'reply.bookxchanger@gmail.com',
            to: receiver,
            subject: subject,
            text: message
        }

        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log(error);
            }else{
                console.log('Email was sent successfully!'+info.response)
            }
        })
        return res.status(200).json({msg:"Feedback sent successfully!",severity:"success"})
    }catch(err){
        return res.status(500).json({ msg: "Something went wrong" });
    }
    
}
