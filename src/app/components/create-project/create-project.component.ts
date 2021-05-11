import { HttpClient } from '@angular/common/http';
import { projectModel } from './../../models/project';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  public title: string;
  public projectModel: projectModel;

  constructor(private projectService: ProjectService, httpClient: HttpClient) {
    this.title = "Crear Proyecto";
    this.projectModel = new projectModel({ S: "" }, { S: "" }, { S: "" }, { N: "" }, { S: "" }, { S: "" });
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(this.projectModel);
    this.projectService.saveProject(this.projectModel).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(<any>error);
    });
  }
}
