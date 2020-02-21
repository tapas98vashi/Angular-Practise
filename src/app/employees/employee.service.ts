import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeService {

  private apiUrl: string;

  constructor( private httpClient: HttpClient, private route: Router) {
    this.apiUrl = environment.baseUrl;
  }

  /**
   * Method to get all data.
   */
  public getAllData(): Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}`);
  }

  /**
   *
   * @param id Fetching particular id.
   */
  public getData(id: number): Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.apiUrl}`+`/${id}`);
  }

  /**
   *
   * Method to add data to the list.
   */
  public addData(employee: Employee): Observable<Employee>
  {
    return this.httpClient.post<Employee>(`${this.apiUrl}`, employee);
  }

  /**
   *
   * @param employee Employee model is used here.
   * @param id Fetching particular data with the help of id.
   */
  public editData(employee: Employee, id: number): Observable<Employee>
  {
    return this.httpClient.put<Employee>(`${this.apiUrl}`+`/${id}`, employee);
  }

  /**
   *
   * @param id Fetching particular id and then deleting it.
   */
  public deleteData(id: number): Observable<Employee>
  {
      return this.httpClient.delete<Employee>(`${this.apiUrl}`+`/${id}`);
  }

  /**
   *
   * @param searchText Used for server side searching.
   */
  public searchData(searchText: string): Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}?q=${searchText}`);
  }

  /**
   *
   * @param sortField Used for server side sorting.
   */
  public sortData(sortField: string): Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}?${sortField}`);
  }
}
