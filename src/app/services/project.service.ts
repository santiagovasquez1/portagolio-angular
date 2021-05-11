import { projectModel } from './../models/project';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private global: GlobalService, private http: HttpClient) {
  }


  homeService(): Observable<projectModel[]> {
    const url = this.global.url + "home";
    console.log('Request is sent!');
    return this.http.get<projectModel[]>(url);
  }

  saveProject(project: projectModel): Observable<projectModel> {
    const url = "localhost:3700/api/saveProject/";
    let params = JSON.stringify(project);
    let headers=new HttpHeaders().set('Content-Type','application/json');

    return this.http.post<projectModel>(url,params,{headers:headers});
  }
}
