import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list-presentation-ui',
  templateUrl: './employee-list-presentation.html',
  styleUrls: ['./employee-list-presentation.css']
})

export class EmployeeListPresentation{

    sortBy: string; // Declared for sorting

    // Input employee of type observable
    @Input() public employees$:Observable<Employee>;
    @Output() public delete // Output event to emit delete id
    @Output() public search // Output event used in searching
    @Output() public sort // Output event used in sorting

    constructor() {
      this.delete=new EventEmitter<number>();  // Initialisation of emit event
      this.search=new EventEmitter<string>();  // Initialisation of emit event
      this.sort=new EventEmitter<string>();    // Initialisation of emit event
    }

    /**
     *
     * @param id Using particular Id to delete
     */
    public onDelete(id: number): void
    {
        this.delete.emit(id);
    }

    /**
     *
     * @param event Emitting event for searching
     */
    public searchData(event: string): void
    {
        this.search.emit(event)
    }

    /**
     * Sort by Ascending
     */
    public sortAsc():void
    {
        this.sortBy=document.activeElement.id
        this.sort.emit(`_sort=${this.sortBy}&_order=asc`)
    }

    /**
     * Sort by Descending
     */
    public sortDesc():void
    {
        this.sortBy=document.activeElement.id
        this.sort.emit(`_sort=${this.sortBy}&_order=desc`)
    }
}
