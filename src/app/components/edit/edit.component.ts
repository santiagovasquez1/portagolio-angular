import { GlobalService } from './../../services/global.service';
import { projectModel } from './../../models/project';
import { UploadImageService } from './../../services/upload-image.service';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create-project/create-project.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public title: string;
  public projectModel: projectModel;
  public isError: string;
  public filesToUpload: Array<File>
  public buttonIsDisabled: boolean;
  public idProject: string;
  public url: string;
  constructor(private projectService: ProjectService, private global: GlobalService, private updateImageService: UploadImageService, private router: Router, private route: ActivatedRoute) {
    this.isError = "";
    this.url = this.global.url;
    this.title = "Edicion de proyecto";;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params.id;
      this.loadProject(id);
    });
  }

  loadProject(id: string) {
    this.projectService.getProject(id).subscribe(response => {
      this.projectModel = new projectModel(response.project.projectName.S, response.project.description.S, response.project.category.S, response.project.projectYear.N, response.project.lenguajes.S, response.project.image.S);
      this.projectModel.id = response.project.id.S;
    }, error => {

    });
  }

  onSubmit(form) {
    this.projectService.updateProject(this.projectModel.id, this.projectModel).subscribe(response => {
      let url = `${this.global.url}/upLoadImage/${this.projectModel.id}`;
      if (this.filesToUpload) {
        this.updateImageService.makeFileRequest(url, [], this.filesToUpload, 'image').then(result => {
          this.isError = 'success';
          this.buttonIsDisabled = false;
        }).catch(error => {
          console.log(error);
        });
      } else {
        this.isError = 'success';
        this.buttonIsDisabled = false;
      }
      setTimeout(() => {
        this.router.navigate(['/proyectos']);
      }, 1000);
    }, error => {
      this.isError = 'error';
      this.buttonIsDisabled = false;
      console.log(<any>error);
    });
  }

  uploadImageEvent(fileInput) {
    this.filesToUpload = <Array<File>>fileInput.target.files
  }

}
