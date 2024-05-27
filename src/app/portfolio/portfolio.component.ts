import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projecto } from '../_models/Projecto';
import { Tag } from '../_models/Tags';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projecto : Projecto [] =[
    {id:0, nombre:'Porftolio con Angular',sumario:'Actualizando usando Angular',descripcion:'',linkProyecto:'',tags:[Tag.ANGULAR,Tag.HTML,Tag.CSS,Tag.TYPESCRIPT],imagen:[]},
    {id:1, nombre:'Juego Preguntas',sumario:'Actualizando usando Angular',descripcion:'',linkProyecto:'',tags:[Tag.PYTHON,Tag.HTML,Tag.CSS],imagen:[]},
    {id:2, nombre:'Club Deportivo',sumario:'Actualizando usando Angular',descripcion:'',linkProyecto:'',tags:[Tag.CSHARP],imagen:[]}   

  ];


  constructor(private titleService: Title){
    this.titleService.setTitle('OSCAR J - PORTFOLIO')

}
}
