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


  homeService(): Observable<any> {
    const url = this.global.url + "home";
    console.log('Request is sent!');
    return this.http.get<any>(url);
  }

  saveProject(project: projectModel): Observable<any> {
    const url = `${this.global.url}/saveProject`;
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(url, params, { headers: headers });
  }

  getProject(id: string):Observable<any> {
    const url = `${this.global.url}get/${id}`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(url, { headers: headers });
  }

  // uploadFile(id: string, file: File) {
  //   const url = `${this.global.url}/uploadImage/${id}`;
  //   let headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post(url, file, { headers: headers });
  // }

  deleteProject(id:string):Observable<any>{
    const url = `${this.global.url}deleteProject/${id}`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(url, {headers:headers});
  }

  updateProject(id:string, project):Observable<any>{
    const url = `${this.global.url}updateProject/${id}`;
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(url,params, {headers:headers});
  }
}
