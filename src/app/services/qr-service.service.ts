import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule,} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';


import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QrServiceService {

  constructor(private httpclient : HttpClient) { }


  generateqr(jsondata: {}) {
    console.log(JSON.stringify(jsondata));
  return this.httpclient.post<any>('http://localhost:8080/qrgenerate',JSON.stringify(jsondata),{headers : new HttpHeaders({'Content-Type': 'application/json'})});

  }



  
 
}
