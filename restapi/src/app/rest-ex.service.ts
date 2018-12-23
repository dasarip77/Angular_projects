import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from './models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestExService {

  constructor(private http: HttpClient) { }

  getusers(): Observable<any> {

    return this.http.get<any>('https://reqres.in/api/users?page=2');
  }

  postUsers(user:User): Observable<any>{
    return this.http.post<any>('https://reqres.in/api/users', user);
  }

  putUsers(user:User): Observable<any>{
    return this.http.put<any>('https://reqres.in/api/users/2', user);
  }
}
