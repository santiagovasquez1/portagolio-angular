import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title:string;
  subTitle:string; 
  email:string
  constructor() { 
    this.title="Santiago Vásquez"
    this.subTitle="Desarrollador de Software"
    this.email="santivasquez@gmail.com"
  }

  ngOnInit(): void {

  }

}
