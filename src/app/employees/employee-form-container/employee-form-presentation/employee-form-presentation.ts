import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeFormPresenter } from '../employee-form-container/../employee-form-presenter/employee-form.presenter';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.css'],
  providers: [EmployeeFormPresenter]
})

export class EmployeeFormPresentation implements OnChanges{

  // Input property to input employee
  @Input() employee: Employee
  // Output property 
  @Output() createEvent = new EventEmitter<FormGroup>()

  // Injected EmployeeFormPresenter Service into the constructor 
  constructor(private empFormPresenter:EmployeeFormPresenter){}
  empForm: FormGroup // Declaring FormGroup
  departments: string[] // Array of departments

  /**
   * If condition to decide whether to add or edit
   */
  ngOnChanges() {
    if(this.employee)
    {
      this.empForm = this.empFormPresenter.createEmployeeForm()
      this.departments = this.empFormPresenter.departments;
      console.log(this.employee);
      this.empForm.patchValue(this.employee);
    }
    else
    {
      this.empForm = this.empFormPresenter.createEmployeeForm();
      this.departments = this.empFormPresenter.departments;
    }
  }

  /**
   * Used for Form Validation
   */
  get f()
  {
    return this.empForm.controls;
  }

  /**
   * This function is called when you submit the form
   */
  onSubmit()
  {
    this.createEvent.emit(this.empForm);
    
  }
}
