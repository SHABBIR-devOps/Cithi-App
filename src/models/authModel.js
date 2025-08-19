
const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },

     email:{
        type:String,
        required:true
    },

     gender:{
        type:String,
        required:true
    },

     phone:{
        type:String,
        required:true
    },

     password:{
        type:String,
        required:true
    },

     avatar:{
        type:String,
       default:null
    },

     otp:{
        type:Number,
        default:null
    },
     otpExpireTime:{
        type:Date,
        default:null
    },

     isVeified:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('auth' , authSchema)