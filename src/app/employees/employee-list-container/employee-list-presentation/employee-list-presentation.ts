import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.css']
})

export class EmployeeListPresentation{
    @Input() employees$: Observable<Employee>;
    @Output() deleteEvent = new EventEmitter<number>();
    @Output() editEvent = new EventEmitter<number>();
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
}