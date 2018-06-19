import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {DataService} from '../data.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  providers:[DataService]
})
export class ShoppingItemComponent implements OnInit {

  EmployeeList: Employee[]=[];
  selectedEmployee:Employee;
  toggleForm:boolean=false;


  constructor(private dataservice:DataService) { }


  getEmployee(){
    //to do later
    this.dataservice.getEmployee()
    .subscribe(employee =>{
      this.EmployeeList=employee;
      console.log(employee);
      //console.log("data from data service: "+this.shoppingItemList[0].itemName);
    })
  }
  addEmployee(form)
  {
    //console.log(form.value);
    let newEmployee: Employee={
      employeeName:form.value.employeeName,
      joining_Date: form.value.joining_Date,
      age:form.value.age,
      email_id:form.value.email_id
    }
    this.dataservice.addEmployee(newEmployee)
    .subscribe(item=>{
      //console.log(item);
      this.getEmployee();
    })
  }
  deleteEmployee(id){
    this.dataservice.deleteEmployee(id)
    .subscribe(data=>{
      console.log(data);
      if(data.n==1)
      {
        for(var emp=0;emp<this.EmployeeList.length;emp++)
        {
          if(id==this.EmployeeList[emp]._id){
            this.EmployeeList.splice(emp,1);
          }
        }

      }
    })
  }
  showEditForm(employee){
    this.selectedEmployee=employee;
    this.toggleForm=!this.toggleForm;
  }
  editEmployee(form){
    let newEmployee: Employee={
      _id:this.selectedEmployee._id,
      employeeName:form.value.employeeName,
      joining_Date: form.value.joining_Date,
      age:form.value.age,
      email_id:form.value.email_id
    };
    this.dataservice.updateEmployee(newEmployee)
    .subscribe(result =>{
      console.log(result);
      this.getEmployee();
    });
    this.toggleForm= !this.toggleForm;
  }
  ngOnInit() {
    this.getEmployee();
  }
}