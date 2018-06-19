const express=require('express');
var router=express.Router();

const Employee=require('../model/employee');
router.get('/get_employee',(req,res,next)=>{
    //res.send('GET Route Cames');
    Employee.find(function(err,employees){
        if(err)
        {
            res.send(err);
        }
        else{
            res.json(employees);
        }
    });
});

router.post('/insert_employee',(req,res,next)=>{
    //res.send('POST Route Cames');
    var newEmployee =new Employee({
        employeeName:req.body.employeeName,
        joining_Date:req.body.joining_Date,
        age:req.body.age,
        email_id:req.body.email_id
    });
    console.log(newEmployee);
    newEmployee.save(function(err,employee){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json({msg:"Employee Inserted Succesfully"});
            console.log("Inserted Succesfully");
        }
    });
});

/* router.put('/update_Employees',(req,res,next)=>{ Other way of Insertion And Deletion
router.post('/update_Employees',(req,res,next)=>{
    //res.send('UPDATE Route Cames');
    var EmployeeName=req.body.EmployeeName;
    Employee.findOneAndUpdate({"EmployeeName":EmployeeName},{
        $set:{
            EmployeeName:req.body.EmployeeName,
            EmployeeQuantity:req.body.EmployeeQuantity,
            EmployeeBought:req.body.EmployeeBought
        }
        },
        function(err,result){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(result);
            }
    });
});

router.post('/delete_Employees',(req,res,next)=>{
//router.delete('/delete_Employees',(req,res,next)=>{
    //res.send('DELETE Route Cames');
    var EmployeeName=req.body.EmployeeName;
    Employee.remove({"EmployeeName":EmployeeName},function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
*/

router.put('/update_employee/:id',(req,res,next)=>{
    Employee.findOneAndUpdate({_id:req.params.id},{
        $set:{
            employeeName:req.body.employeeName,
            joining_Date:req.body.joining_Date,
            age:req.body.age,
            email_id:req.body.email_id,
        }
        },
        function(err,result){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(result);
            }
    });
});

router.delete('/delete_employee/:id',(req,res,next)=>{
    //res.send('DELETE Route Cames');
    Employee.remove({_id:req.params.id},function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports=router;