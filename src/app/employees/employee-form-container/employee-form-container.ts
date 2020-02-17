import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.html',
  styleUrls: ['./employee-form-container.css']
})

export class EmployeeFormContainer implements OnInit{

  // Declared id
  id: number
  // Declared employeeDetails observable
  employeeDetails$: Observable<Employee>; 

  constructor(private routes: ActivatedRoute,private employeeService: EmployeeService){
    this.id = this.routes.snapshot.params['id'];  // Fetched id and stored into this.id 
  }

  ngOnInit()
  {
    if(this.id)
    {
      this.employeeDetails$ = this.employeeService.getData(this.id);
    }
  }

  /**
   * 
   * If condition to decide whether to add or edit the data.
   */
  createEmployee(empForm: Employee)
  {
    if(this.id)
    {
      this.employeeService.editData(empForm, this.id).subscribe();
    }
    else
    {
      this.employeeService.addData(empForm).subscribe();
    }
  }
}