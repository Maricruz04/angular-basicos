import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title : string = 'Contador App';
  numero:number = 5;

  /*sumar() {
    this.numero += 1;
  }

  restar(){
    this.numero -=1;
  }*/


   base: number =5;

  acumular(base : number){
    this.numero += base ;
  }
}
