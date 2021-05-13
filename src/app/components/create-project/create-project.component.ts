import { GlobalService } from './../../services/global.service';
import { UploadImageService } from './../../services/upload-image.service';
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
  public isError: string;
  public filesToUpload: Array<File>
  public buttonIsDisabled: boolean;

  constructor(private projectService: ProjectService, private uploadImageService: UploadImageService, private global: GlobalService) {
    this.title = "Crear Proyecto";
    this.projectModel = new projectModel("", "", "", "", "", "");
    this.filesToUpload = [];
    this.buttonIsDisabled = false;
  }

  ngOnInit(): void {
  }

  onSubmit(form) {

    this.buttonIsDisabled = true;
    this.projectService.saveProject(this.projectModel).subscribe(result => {
      let url = `${this.global.url}/upLoadImage/${result.projects.id.S}`;
      this.uploadImageService.makeFileRequest(url, [], this.filesToUpload, 'image').then(result => {
        console.log(result);
        this.projectModel = new projectModel("", "", "", "", "", "");
        this.isError = 'success';
        form.reset();
        this.buttonIsDisabled = false;
      }).catch(error => {
        console.log(error);
      });
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
