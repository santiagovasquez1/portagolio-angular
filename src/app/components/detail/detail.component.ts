import { projectModel } from './../../models/project';
import { GlobalService } from './../../services/global.service';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public url: string;
  public project: projectModel;
  public isLoad: boolean;
  public status: string;
  public confirm: boolean;

  constructor(private projectService: ProjectService, private global: GlobalService, private router: Router, private route: ActivatedRoute) {
    this.url = global.url;
    this.isLoad = true;
    this.status = '';
    this.confirm = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params.id;
      this.loadProject(id);
    });
  }

  loadProject(id: string) {
    this.projectService.getProject(id).subscribe(response => {
      this.project = new projectModel(response.project.projectName.S, response.project.description.S, response.project.category.S, response.project.projectYear.N, response.project.lenguajes.S, response.project.image.S);
      this.project.id = response.project.id.S;
      this.isLoad = false;
    }, error => {
      this.isLoad = false;
      this.status = JSON.stringify(error);
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

  setConfirm(confirm:boolean) {
    this.confirm = confirm;
  }
}
