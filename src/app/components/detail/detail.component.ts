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

  constructor(private projectService: ProjectService, private global: GlobalService, private router: Router, private route: ActivatedRoute) {
    this.url = global.url;
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
      console.log(response);

    }, error => {
      console.log(<any>error);
    });
  }

}
