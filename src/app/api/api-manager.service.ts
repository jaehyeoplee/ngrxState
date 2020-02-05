import { Injectable } from '@angular/core';
import {ApiService} from './service/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  constructor(private http: ApiService) { }

  GET_DESTINATION(params: any): Observable<any> {
    return this.http.post(`/destination`, params);
  }

  GET_OUTDOOR(params: any): Observable<any> {
    return this.http.post(`/outdoor`, params);
  }
}
