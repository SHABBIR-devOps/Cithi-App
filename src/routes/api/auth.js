const express = require ('express')
const {registrationController, otpVerifecation } = require('../../controllers/authcontroller')
const authRoute = express.Router()


authRoute.post('/registration' , registrationController)
authRoute.post('/otpVerifecation' , otpVerifecation)



module.exports =authRoute