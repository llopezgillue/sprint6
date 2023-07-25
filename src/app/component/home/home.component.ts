import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  stories: { story: string, img: string }[] = [];
  welcomePage: boolean = true;
  actualPage: string = '';

  start() {
    this.welcomePage = false;
    this.actualPage = this.stories[0].img;
  }

  constructor() {

    this.stories = [
      {
        story: "El nostre heroi estaba flotant per l'espai sideral quan a la llunyania va divisar una nau espacial"
         ,
        img: "./assets/img/1.jpg"
      },
      {
        story: "sentía curiositat per l'interior de la nau i es va posar a inspeccionarla.Va arribar a una sala amb dos portes"
        ,
        img: "./assets/img/2.jpg"
      },
      {
        story: " l'heroi va decidir atravessar la porta que el portaba a casa",
        img: "./assets/img/3.jpg"
      },
      {
        story: "Mentrestant, altres herois no van tindre tanta sort en la seva elecció...",
        img: "./assets/img/4.jpg"
      }
    ]
  }
}
