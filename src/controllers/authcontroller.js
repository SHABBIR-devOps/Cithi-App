const { emailRegex, passwordRegex } = require("../helpers/allRegex")
const bcrypt = require('bcrypt');
const authModel = require("../models/authModel");
const {generateOTP, getTwoMinutesLater} = require("../helpers/allGenerator");
const saltRounds = 10;

//------------------Registration--------------------//
const registrationController = async (req, res) => {
    try {
        const { userName ,email, password , phone ,gender } = req.body

        //----------------Validation part---------------//
        if(!userName || !email || !password || !phone ||!gender) {
            return res.status(400).send('Invalid Data')
        }

        if (!emailRegex.test(email) || !passwordRegex.test(password)) {
            return res.status(401).send('User email or password is invalid')
        }    
    
        let avatar= ''
        if(gender == 'male') avatar='https://cdn-icons-png.flaticon.com/512/0/93.png'   
        if(gender == 'female') avatar='https://cdn-icons-png.flaticon.com/512/65/65581.png'
        
        const hashPassword = await bcrypt.hash(password, saltRounds)
        const otp = generateOTP()
      
await new authModel({
    userName:userName.trim(),
    email,
    password:hashPassword,
    phone,
    gender,
    avatar,
    otp,
    otpExpireTime:getTwoMinutesLater()
}).save()

    console.log(otp)
        res.status(201).send('done')

    } catch (err) {
        console.error(err)
        res.status(500).send("Server error")
    }
}

module.exports = {registrationController}
