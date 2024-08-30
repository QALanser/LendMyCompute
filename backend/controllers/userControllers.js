const asyncHandler = require("express-async-handler");
const Users = require("../models/usersModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async function(req,res) {
    const {username,email,password} = (req.body) // initializing the req.body values
    const values = req.body                                  // to the array of variables
    if(!username || !email || !password){
        res.status(400)
        throw new Error("Please enter all the Feilds")
    }
    const userExists = await Users.findOne({$or: [{email: email}]})
    // Checking whether the user exists in the db

    if(userExists){ 
        res.status(400)
        throw new Error("User already exists")
    }
    
    const user = await Users.create({
        username : username,
        email : email,
        password : password,
        
    })
    if(user){
        res.status(201).json({
            _id : user._id,
            username : user.username,
            email : user.email,
            password : user.password,
            token : generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error("Failed to Create New User")
    }
})

////////////////////////////////////////////////////////////////////////

const authUser = asyncHandler(async function(req,res){
    const {email, password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error("Please enter all the Feilds")
    }
    const user = await Users.findOne({$or: [{email: email}]})
    if(user && await user.matchPassword(password)){
        res.status(201).json({
            _id : user._id,
            username : user.username,
            email : user.email,
            password : user.password,
            token : generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error("Invalid Email or Password")
    }
})

////////////////////////////////////////////////////////////////////////

module.exports = {registerUser, authUser}