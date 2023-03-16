const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EMS')


// mongoose.model creation

const Employee = mongoose.model('Employee',{
    id:String,
    name:String,
    age:String,
    designation:String,
    salary:String
})

module.exports = {
    Employee
}