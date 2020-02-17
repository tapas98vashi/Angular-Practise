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
  addData(employee: Employee): Observable<Employee>
  {
    return this.httpClient.post<Employee>(`${this.apiUrl}`, employee);
  }

  /**
   * 
   * @param employee Updating another data in the form group
   * @param id It will help to select which id to update
   */
  editData(employee: Employee, id: number): Observable<Employee>
  {
    return this.httpClient.put<Employee>(`${this.apiUrl}`+`/${id}`, employee);
  }

  /**
   * 
   * @param id Fetching a particular id and deleting it
   */
  deleteData(id: number): Observable<Employee>
  {
    if(confirm('Are you Sure you want to delete?'))
    {
      return this.httpClient.delete<Employee>(`${this.apiUrl}`+`/${id}`);
    }
  }

  /**
   * 
   * @param id Id is used to navigate to another container.
   */
  getId(id: number): void
  {
      this.route.navigate(['/employee-form-container', id]);
  }

  /**
   * 
   * @param Employee Used for server side searching.
   */
  searchEmployee(employee: Employee): Observable<Employee[]> 
  {
      return this.httpClient.get<Employee[]>(`${this.apiUrl}?q=${employee}`);
  }

  /**
   * 
   * @param orderString Used for server side sorting
   */
  sortEmployee(orderString: string): Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}?_sort=fullName&_order=${orderString}`);
  }
}
