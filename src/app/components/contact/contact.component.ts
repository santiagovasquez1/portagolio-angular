import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number
  public anchuraToSlider: number;
  public autor: any
  @ViewChild('titulo') texto: any;

  constructor() {
  }

  ngOnInit(): void {
    //ViewChilds en angular
    //Nombrar el elemento html con #

    var op1 = document.getElementById('titulo').innerHTML;
    console.log(op1);
  }

  cargarSlider() {
    this.anchuraToSlider = null;
    this.anchuraToSlider = this.widthSlider;
  }

  resetSlider() {
    this.anchuraToSlider = null;
  }

  getAutor(event) {
    this.autor = event;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.texto);
  }

}
