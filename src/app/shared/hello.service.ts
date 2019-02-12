import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Iperson } from '../shared/person';

@Injectable({
    providedIn: 'root'
  })
  export class HelloService {
    baseUrl = 'http://4ae79a42.ngrok.io/api/OrgEmployees';
    //baseUrl = '/assets/mock-data.json';
    constructor(private http: HttpClient) { }
    getDetails(): Observable<Iperson[]> {
      return this.http.get<Iperson[]>(this.baseUrl);
    }
  }
  