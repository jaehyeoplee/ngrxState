import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService extends HttpService{

  constructor(private _http: HttpClient) {
    super(_http);
    this.setHost(environment.api_host);
    this.setHeader('Content-Type', 'application/json');
  }

  post<T>(url: string, params: any): Observable<any> {
    return super.post<T>(url, params).map(res => {
      return res;
    }).catch((err) => {
      return Observable.throwError(err);
    })
  }
}
