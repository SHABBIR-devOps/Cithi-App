const mongoose = require('mongoose')
const dbConnetion = ()=>{
    mongoose.connect(process.env.dbLink)
    .then(()=>console.log('db connected'))
    .catch(err=>console.log(err))
}




module.exports = dbConnetion