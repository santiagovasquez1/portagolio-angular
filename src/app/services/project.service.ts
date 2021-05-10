import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { projectModel } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private global:GlobalService,private http:HttpClient) { 
  }


  homeService():Observable<projectModel[]>{
    const url=this.global.url+"home";
    console.log('Request is sent!');
    return this.http.get<projectModel[]>(url); 
  }
}
