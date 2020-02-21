import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormPresenter {
    address: FormArray;
    id: number;
    departments: string[] = ['Angular', '.Net'];
    employeeForm: FormGroup;

    constructor(private fb: FormBuilder, private httpClient: HttpClient){}

    createEmployeeForm()
    {
      return this.employeeForm = this.fb.group({
      fullName:['', [Validators.required, Validators.minLength(4)]],
      emailId:['', [Validators.required]],
      address: this.fb.array([this.createItem()]),
      mobileNumber:['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      department:[''],
      gender: ['male'],
      hireDate:[''],
      permanent:['']
      })
    }
    createItem(): FormGroup {
        return this.fb.group({
          city: [''],
          street: [''],
          zipCode:[''],
          state:[''],
        });
      }
}
