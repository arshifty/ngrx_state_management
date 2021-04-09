import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Teacher from './Teacher';


@Injectable({
  providedIn: 'root'
})
export class TeacherHttpService {
  private ApiURL: string = 'http://localhost:3006/user';
  constructor(private httpclient: HttpClient) {}

 
  getTeacher(): Observable<Teacher[]> {
    return this.httpclient.get<Teacher[]>(`${this.ApiURL}/teacher`);
  }

}
