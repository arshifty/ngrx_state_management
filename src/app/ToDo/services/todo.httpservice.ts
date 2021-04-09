import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ToDo from './todo.model';
import Customer from './Customer'

@Injectable({
  providedIn: 'root'
})
export class ToDoHttpService {
  private ApiURL: string = 'http://localhost:3006/user';
  constructor(private httpclient: HttpClient) {}

  getToDos(): Observable<ToDo[]> {
    return this.httpclient.get<ToDo[]>(this.ApiURL);
  }

  getCustomerData(): Observable<Customer[]> {
    return this.httpclient.get<Customer[]>(`${this.ApiURL}/customer`);
  }

}
