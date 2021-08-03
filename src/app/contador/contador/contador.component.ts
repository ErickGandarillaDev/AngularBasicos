import { Component } from '@angular/core';


@Component({
    selector:'app-contador',
    template:`
    <h1> {{titulo}} </h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <hr>

    <button (click)="acumular(base);">+{{base}}</button>

    <span> {{numero}} </span>

    <button (click)="acumular(-base);">-{{base}}</button>   
    <hr>
    <h3>Cambiar base</h3>
    <button (click)="cambiarBase(1)">+1</button>
    <button (click)="cambiarBase(-1)">-1</button>

    `   
})
export class ContadorComponent{
    titulo:string = 'Contador App';
    numero:number= 10;  
    base:number=5;
  
    acumular(valor:number):void{
      this.numero+=valor;
    }
    cambiarBase(valor:number):void{
      this.base+=valor;
    }


}