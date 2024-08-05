import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Employee } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlendpoint : string 

  constructor(
    private httpClient : HttpClient
  ) { 
    this.urlendpoint="http://localhost:8080/api/employees"
  }
  get<T> (url: string, options?: Options ): Observable<T>{
    return this.httpClient.get<T>(url, options) as Observable<T>
  }
  public findAll (): Observable <any>{
    return this.httpClient.get<any[]>(this.urlendpoint);
  }
   
}
