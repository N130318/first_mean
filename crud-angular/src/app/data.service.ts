import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http) { }
  getEmployee()
  {
    return this.http.get('http://localhost:3000/api/get_employee')
    .pipe(map(res => res.json())); 
  }
  addEmployee(newEmployee){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/insert_employee',newEmployee,{headers:headers})
    .pipe(map(res => res.json())); 
  }
  deleteEmployee(id)
  {
    return this.http.delete('http://localhost:3000/api/delete_employee/'+id)
    .pipe(map(res => res.json()));
  }
  updateEmployee(newEmployee){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/api/update_employee/'+newEmployee._id,newEmployee,{headers:headers})
    .pipe(map(res => res.json()));
  }
}
