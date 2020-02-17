import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list-container.html',
  styleUrls: ['./employee-list-container.css']
})

export class EmployeeListContainer implements OnInit{
    employeeDetails$: Observable<Employee[]>;

    orderStr: string = '';
    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit()
    {
        this.getAllEmployee();
    }

    /**
     * Function to getAllEmployee records.
     */
    getAllEmployee()
    {
        this.employeeDetails$ = this.employeeService.getAllData()
    }

    /**
     * 
     * @param id Fetching a particular id and deleting it.
     */
    deleteEmployee(id:number)
    {
        this.employeeService.deleteData(id).subscribe()
        this.getAllEmployee()
    }

    /**
     * 
     * @param id Fetching a particular id and editing it.
     */
    editEmployee(id:number)
    {
        this.employeeService.getId(id)
    }

    /**
     * 
     * @param searchText Used for searching
     */
    searchEmployee(searchText)
    {
        this.employeeDetails$ = this.employeeService.searchEmployee(searchText);
    }

    /**
     * 
     * @param flag Used to sort asc and desc
     */
    order(flag) {
        if(flag === true)
        {
            this.orderStr = 'asc';
        } else {
            this.orderStr = 'desc';
        }
    }

    /**
     * Used for sorting
     */
    sortEmployees(){
        this.employeeDetails$ = this.employeeService.sortEmployee(this.orderStr);
    }
}
