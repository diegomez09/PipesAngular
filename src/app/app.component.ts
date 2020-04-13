import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  promesa= new Promise<string>((resolve) =>{
  setTimeout(() =>{
    resolve('Llegó el pedo');
  },4500);
  });
  idioma:string='en';
  fecha:Date = new Date();
  nombre: string = 'Doroteo Arango';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje:number = 0.3544;
  salario:number=12345.5;
  heroe = {
    nombre: 'logan',
    clave: 'wolverine',
    edad: 50,
    direccion:{
      calle:'isla cancun',
      numero: 24
    }
  }  
}
