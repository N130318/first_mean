const mongoose=require('mongoose');

const EmployeeSchema=mongoose.Schema({
    employeeName: {
        type:String,
        required:true
    },
    joining_Date:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email_id:{
        type:String,
        required:true
    }
});
const Employee = module.exports= mongoose.model("employee_table",EmployeeSchema);