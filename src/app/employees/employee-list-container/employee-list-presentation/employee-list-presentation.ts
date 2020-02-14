import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

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
    constructor() {}

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
    searchByName(searchText)
    {
        this.searchEvent.emit(searchText);
    }
}