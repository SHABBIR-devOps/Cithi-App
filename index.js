//-------------All Requires part------------//
const express = require ('express')
const app = express()
const port =8000
const cors = require('cors')
const dbConnetion = require('./db')
const route = require('./src/routes/routes')
require('dotenv').config()


// ---------------All middleware------------//
app.use(express.json())
app.use(cors())
app.use(route)
dbConnetion()


//----------running port-----------//
app.listen(port ,()=>{
    console.log(`this app is running at ${port}`)
})