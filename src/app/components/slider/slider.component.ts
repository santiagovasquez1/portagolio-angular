import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public body: JQuery<HTMLElement>;
  public mousePos: String;
  @Input() public ancho: number;
  @Output() sendAutor = new EventEmitter();

  public autor: any;
  constructor() {
    this.autor = {
      name: "Santiago Vasquez",
      email: "santivasquez1@gmail.com",
      edad: 29,
      profesion: "Desarrollador de software"
    }
  }

  ngOnInit(): void {
    this.body = $("body");
    this.body.on('mousemove', e => {
      this.mousemoveEvent(e);
    });

    (<any>$('.bxslider')).bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.ancho
    });

    this.sendAutor.emit(this.autor);
  }

  private mousemoveEvent(e: any) {
    this.mousePos = `X:${e.pageX}--Y:${e.pageY}`;
  }

  launch(event) {
    this.sendAutor.emit(this.autor);
  }

}
