import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesModule } from '../../employees.module';

@Component({
  selector: 'app-employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.css']
})

export class EmployeeListPresentation{

    // Input event for observable of type employee
    @Input() employees$: Observable<Employee>;
    // Creating delete event to emit.
    @Output() deleteEvent = new EventEmitter<number>();
    // Creating edit event to emit.
    @Output() editEvent = new EventEmitter<number>();
    // Creating search event to emit.
    @Output() searchEvent = new EventEmitter<string>();
    // Employee object inputted
    @Input() employees;
    // Created sort event to emit
    @Output() sort = new EventEmitter<Employee[]>();
    // Created order event for asc and desc
    @Output() order = new EventEmitter<boolean>();

    flag: boolean; // Used to change between asc and desc 

    constructor() {
    this.flag = false;
    }

    /**
     * 
     * @param id Delete function that will eventually emit an id.
     */
    onDelete(id: number)
    {
        this.deleteEvent.emit(id)
    }

    /**
     * 
     * @param id Edit function that will eventually emit an id.
     */
    onEdit(id: number)
    {
        this.editEvent.emit(id)
    }

    /**
     * 
     * @param searchText Used to emit an event for searching.
     */
    search(searchText: string)
    {
        this.searchEvent.emit(searchText);
    }

    /**
     * Function used for sorting
     */
    sortByName()
    {
        this.flag = !this.flag;
        console.log(this.flag);
        this.sort.emit(this.employees);
        this.order.emit(this.flag);
    }
}