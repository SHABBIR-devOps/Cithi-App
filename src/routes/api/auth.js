const express = require ('express')
const {registrationController } = require('../../controllers/authcontroller')
const authRoute = express.Router()

authRoute.post('/registration' , registrationController)





module.exports =authRoute