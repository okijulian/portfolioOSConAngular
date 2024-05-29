import { Injectable } from '@angular/core';
import { Projecto } from '../_models/Projecto';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projecto: Projecto[] = [
    {
      id: 0,
      nombre: 'Porftolio con Angular',
      sumario: 'Actualizando usando Angular',
      descripcion: '',
      linkProyecto: '',
      tags: [Tag.ANGULAR, Tag.HTML, Tag.CSS, Tag.TYPESCRIPT],
      imagen: [],
    },
    {
      id: 1,
      nombre: 'Juego Preguntas',
      sumario: 'Actualizando usando Angular',
      descripcion: 'Juego de preguntas realizado con Python y Django',
      linkProyecto: 'https://github.com/okijulian/Projectoinfo2021',
      tags: [Tag.PYTHON, Tag.HTML, Tag.CSS],
      imagen: [
        "../../assets/project1.0.PNG",
        "../../assets/project1.1-administrador.PNG",
        "../../assets/project1.1-iniciosesion.PNG",
        "../../assets/project1.1-login.PNG",
        "../../assets/project1.1-pregunta.PNG",
        "../../assets/project1.1-preguntaFAIL.PNG",
        "../../assets/project1.1-preguntaOK.PNG",
        "../../assets/project1.1-ranking.PNG",
        "../../assets/project1.1-register.PNG",
      ],
    },
    {
      id: 2,
      nombre: 'Club Deportivo',
      sumario: 'Actualizando usando Angular',
      descripcion: '',
      linkProyecto: '',
      tags: [Tag.CSHARP],
      imagen: [],
    },
  ];

  constructor() {}

  GetProject(): Projecto[] {
    return this.projecto;
  }

  GetProyectosPorFiltro(filtarTags: Tag[]): Projecto[] {
    let filtrarProyectos: Projecto[] = [];
    this.projecto.forEach(function (projecto) {
      let foundAll = true;

      filtarTags.forEach(function (filtarTag) {
        if (!projecto.tags.includes(filtarTag)) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filtrarProyectos.push(projecto);
      }
    });

    return filtrarProyectos;
  }
}
