import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class DrawHistoryService {

  constructor(private http: HttpClient) { }

  getData():Observable<any>{

  	const url="http://localhost:3200/Users"


  	return this.http.get<any>(url)
  }





}
