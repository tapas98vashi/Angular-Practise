import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeService {

  apiUrl: string;

  /**
   * 
   * @param httpClient Injected httpClient service into constructor.
   * @param route Injected Router service to navigate.
   */
  constructor(private httpClient: HttpClient, private route: Router) {
    this.apiUrl = environment.baseUrl;
  }


  /**
   * Method used to get all data from json-server.
   */
  getAllData(): Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}`);
  }

  /**
   * 
   * @param id Fetching particular record with help of id parameter.
   */
  getData(id: number): Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.apiUrl}`+`/${id}`);
  }

  /**
   * 
   * @param employee Adds another data to form group
   */
  addData(employee: FormGroup)
  {
    return this.httpClient.post(`${this.apiUrl}`, employee.value);
  }

  /**
   * 
   * @param employee Updating another data in the form group
   * @param id It will help to select which id to update
   */
  editData(employee: FormGroup, id: number)
  {
    return this.httpClient.put(`${this.apiUrl}`+`/${id}`, employee.value);
  }

  /**
   * 
   * @param id Fetching a particular id and deleting it
   */
  deleteData(id: number)
  {
    if(confirm('Are you Sure you want to delete?'))
    {
      return this.httpClient.delete(`${this.apiUrl}`+`/${id}`);
    }
  }

  /**
   * 
   * @param id Id is used to navigate to another container.
   */
  getId(id: number)
  {
      this.route.navigate(['/employee-form-container', id]);
  }
}
