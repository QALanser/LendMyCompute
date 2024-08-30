// email
// User Name
// Password

const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const userModel = mongoose.Schema(
    {
        userName : { 
            type : String,
            trim : true 
        },

        email : {
            type : String,
            unique : true,
            trim : true
        },
        
        password : {
            type : String
        }
    },
    {
        timestamps : true
    }

);

userModel.methods.matchPassword = async function(enteredPassword){
    const comparison = await bcrypt.compare(enteredPassword,this.password)
    return comparison;
}

userModel.pre('save',async function(next){
    if(!this.isModified){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt) 
})

const Users = mongoose.model("Users", userModel)

module.exports = Users;