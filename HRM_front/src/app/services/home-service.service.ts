import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Options } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(
    private apiService : ApiService
  ) { }
  getEmployees = (url: string , options? :Options): Observable<any> => {
    return this.apiService.get(url,options);
  }
}
