import { Component, Input, Output, EventEmitter} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { EmployeeFormPresenter } from '../employee-form-presenter/employee-form.presenter';

@Component({
  selector: 'app-employee-form-presentation-ui',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.css'],
  providers: [EmployeeFormPresenter]
})

export class EmployeeFormPresentation {

  // Declaring a form group
  public employeeFormDetails: FormGroup;
  // Declaring department array for dropdown
  public departments: string[];
  // Declaring employeeDetails of Employee type
  private employeeDetails: Employee;

  /**
   * Setter method
   */
  @Input() set employee(value: Employee)
  {
    if(value)
    {
      this.employeeDetails = value;
      this.employeeFormDetails.patchValue(this.employee);
    }
  }
  /**
   * Getter method
   */
  get employee()
  {
    return this.employeeDetails;
  }

  // Created output event to emit data
  @Output() create = new EventEmitter<Employee>()

  constructor(private employeeFormPresenter: EmployeeFormPresenter){
    this.create = new EventEmitter<Employee>();
    this.employeeFormDetails = this.employeeFormPresenter.createEmployeeForm();
    this.departments = this.employeeFormPresenter.departments;
  }

  // Used in Form Validation
  get f()
  {
    return this.employeeFormDetails.controls;
  }

  /**
   * It will emit an object of type Employee
   */

  onSubmit(): void
  {
    this.create.emit(this.employeeFormDetails.value);
  }
}
