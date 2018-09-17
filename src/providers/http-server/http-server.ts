import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions, RequestMethod, Request } from "@angular/http";
/*
  Generated class for the HttpServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServerProvider {
  
  constructor(public http: HttpClient, private _http: Http) {
  }
  
  public post(url: string, params?: any) {
    return this._request(RequestMethod.Post, url, params);
  }

  public get(url: string, params?: any) {
    return this._request(RequestMethod.Get, url, params);
  }
  
  private _request(method: RequestMethod, url: string, params?: any) {
    let _header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });
   
    this.JGLog('==============请求结果==============');
    this.JGLog('url:' + url);
    this.JGLog('参数:' + params);
    return new Promise((resolve, reject) => {
      let methodString: string = method == RequestMethod.Post ? 'post' : 'get';
        this.http.request(methodString, url, {
          headers: _header,
          params: params
        }).toPromise()
        .then( res => {
          resolve(res);
          this.JGLog('返回数据:' + JSON.stringify(res));
        }).catch(error => {
          this.JGLog('请求失败:' + JSON.stringify(error));
          reject(error);
        });
    });
  }

  private JGLog(out: any) {
    console.log(out);
  }
}
