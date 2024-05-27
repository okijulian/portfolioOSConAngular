import { Injectable } from '@angular/core';
import { Projecto } from '../_models/Projecto';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projecto : Projecto [] =[
    {id:0, nombre:'Porftolio con Angular',sumario:'Actualizando usando Angular',descripcion:'',linkProyecto:'',tags:[Tag.ANGULAR,Tag.HTML,Tag.CSS,Tag.TYPESCRIPT],imagen:[]},
    {id:1, nombre:'Juego Preguntas',sumario:'Actualizando usando Angular',descripcion:'',linkProyecto:'',tags:[Tag.PYTHON,Tag.HTML,Tag.CSS],imagen:[]},
    {id:2, nombre:'Club Deportivo',sumario:'Actualizando usando Angular',descripcion:'',linkProyecto:'',tags:[Tag.CSHARP],imagen:[]}   

  ];


  constructor() { }

  GetProject(){
    return this.projecto
  }

  GetProjectById(id:number):Projecto{
    let projecto= this.projecto.find(projecto=> projecto.id===id);

    if(projecto===undefined){
      throw new TypeError('No se encuentra proyecyto en el id: '+id);
    }
    return projecto;

  }
}
