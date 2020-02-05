import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _host: string = ``;
  private _header: any = {}

  constructor(private http: HttpClient) { }

  setHost(hostUrl: string): void {
    this._host = hostUrl;
  }

  setHeader(key: string, value: string): void {
    this._header[key] = value;
  }

  get<T>(url: string, params?: any): Observable<any> {
    const serviceUrl = this.concatUrl(url);
    const httpParams = this.jsonToHttpParams(params);

    return this.http.get(serviceUrl, {headers: this._header, params: httpParams});
  }

  post<T>(url: string, body: any): Observable<any> {
    const serviceUrl = this.concatUrl(url);

    return this.http.post(serviceUrl, body, {headers: this._header});
  }

  put<T>(url: string, body: any): Observable<any> {
    const serviceUrl = this.concatUrl(url);

    return this.http.put(serviceUrl, body, {headers: this._header});
  }

  delete<T>(url: string, params?: any): Observable<any> {
    const serviceUrl = this.concatUrl(url);
    const httpParams = this.jsonToHttpParams(params);

    return this.http.delete(serviceUrl, {headers: this._header, params: httpParams});
  }

  // http full url create
  private concatUrl(url: string): string {
    return this._host + url;
  }

  // json convert to HttpParams
  private jsonToHttpParams(params: any): HttpParams {
    let httpParams = new HttpParams();

    for(let param in params) {
      httpParams.set(param, params[param]);
    }

    return httpParams;
  }
}
