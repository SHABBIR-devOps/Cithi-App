const { emailRegex, passwordRegex } = require("../helpers/allRegex")
const bcrypt = require('bcrypt');
const authModel = require("../models/authModel");
const {generateOTP, getTwoMinutesLater} = require("../helpers/allGenerator");
const saltRounds = 10;
const nodemailer = require ("nodemailer");
const sendmail = require("../helpers/mailSender");
const { otpVerifecationTemplate } = require("../helpers/htmlTemplates");





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
        
        const existUser = await authModel.findOne({email})
       if(existUser)return res.status(406).send('user alredy exist')
         

    
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
.then(()=>{
    res.status(201).send('done & otp sent to user email')
    sendmail(email , otpVerifecationTemplate(userName,otp))
})

    
        

    } catch (err) {
        console.error(err)
        res.status(500).send("Server error")
    }
}


//------------------OTP verifecation--------------------//
const otpVerifecation = async (req,res)=>{
   
    const {otp} = req.body

    const existOtp =await authModel.findOne({otp})
    if(!existOtp) return res.status(401).send('otp is not valid')
       
if(existOtp.otpExpireTime<Date.now())return res.status(401).send('otp is expired')

existOtp.isVeified = true
existOtp.otp =null
existOtp.otpExpireTime= null

existOtp.save()



    res.send(existOtp)





}







module.exports = {registrationController, otpVerifecation}
