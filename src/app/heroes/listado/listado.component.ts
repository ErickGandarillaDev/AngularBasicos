import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes: string[]= ["spiderman","Ironman","Hawk","Hulk"];
  heroeBorrado:string="";

  borrarHeroe():void{
    this.heroeBorrado=this.heroes.shift()||"";
  }
  rellenarHeroes():void{
    this.heroes=["spiderman","Ironman","Hawk","Hulk"];
  }
   

}
