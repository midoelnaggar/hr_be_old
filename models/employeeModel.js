const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId:{type:String,required:true},
    employeePassword:{type:String,required:true},
    employeeSlips:{type:Object}
})
const employeeModel = mongoose.model('',employeeSchema,'employee')
module.exports = employeeModel;