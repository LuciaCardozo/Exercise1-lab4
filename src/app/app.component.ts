import { Component } from '@angular/core';
import { Functions } from './models/functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operacion:Functions;
  constructor() {
    this.operacion = new Functions();
  }

  calculate(){
    this.operacion.averageAges();
    this.operacion.calculateAges();
  }
}
