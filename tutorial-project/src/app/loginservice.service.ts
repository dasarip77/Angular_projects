import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Credentials } from './models/login';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  loginuser(login: Credentials): Observable<any>  {

   return this.http.post<any>('https://reqres.in/api/login', login);
  }


}
