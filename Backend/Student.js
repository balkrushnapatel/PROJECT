const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : String,
    rollno : Number,
    age : Number,
    email : String
})

module.exports = mongoose.model('Student', schema , 'students')