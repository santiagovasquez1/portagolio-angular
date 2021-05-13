import { GlobalService } from './../../services/global.service';
import { projectModel } from './../../models/project';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: Array<projectModel>
  public isLoad: boolean;
  public status: string;
  public url: string;
  public confirm: boolean;

  constructor(private projectService: ProjectService, private global: GlobalService, private router: Router, private route: ActivatedRoute) {
    this.isLoad = true;
    this.projects = [];
    this.url = this.global.url;
    this.confirm=false;
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {

    this.projectService.homeService().subscribe(response => {
      console.log(response);
      response.projects.forEach(element => {
        let projectInfo = new projectModel(element.projectName.S, element.description.S, element.category.S, element.projectYear.N, element.lenguajes.S, element.image.S);
        projectInfo.id = element.id.S;
        this.projects.push(projectInfo);
      });
      this.status = "Ok";
      this.isLoad = false;
    }, error => {
      this.status = "error";
      this.isLoad = false;
    });
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id).subscribe(response => {
      this.router.navigate(['/proyectos']);
    }, error => {
      console.log(error);
      this.status = JSON.stringify(error);
    });
  }

}
