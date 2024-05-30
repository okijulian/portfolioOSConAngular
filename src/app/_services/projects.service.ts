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
      nombre: 'Club Deportivo E1',
      sumario: 'Proyecto integrador POO de tecnicatura primer año realizo con winform y mysql',
      descripcion: `El proyecto integrador se desarrolló como parte de las asignaturas "Desarrollo de Sistemas Orientado a Objetos" y
       "Modelado y Diseño de Software". La aplicación diseñada representa un ejercicio práctico de los conceptos aprendidos en estas materias, aplicando los pilares de la POO y diversos diagramas de modelado,
       como diagramas de clases, casos de uso, secuencia y estados.
        ` ,
      linkProyecto: 'https://github.com/NicolasLLans/EspacioDeTrabajoPOO',
      tags: [Tag.CSHARP, Tag.SQL,Tag.GIT],
      imagen: ["../../assets/loginclub.png",
      "../../assets/inicioclub.png",
      "../../assets/inscribirclub.png",
      "../../assets/altaactividad.png",
      "../../assets/altaempleado.png",
      ],
    },
    {
      id: 1,
      nombre: 'Juego Preguntas',
      sumario: ' Realizado con Python y Djando como proyecto final del curso en Informatorio chaco',
      descripcion:  `Una aplicación web hecha el Backend en Python3 con el framework
      Django 3.2 en donde los usuarios pueden crear una cuenta loguearse y
      poder unas preguntas precargadas por los administradores de la página
      al responder todas las preguntas muestran un ranking general de los 10
      usuarios que respondieron mejor las preguntas otorgando 10 puntos
      por cada pregunta correcta. Además los administradores poseen su
      página de administración donde pueden agregar, eliminar los temas y
      las preguntas.`,
      linkProyecto: 'https://github.com/okijulian/Projectoinfo2021',
      tags: [Tag.PYTHON, Tag.HTML, Tag.CSS,Tag.SQL,Tag.DJANGO,Tag.BOOST,Tag.GIT],
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
      nombre: 'Gestion Bibilioteca',
      sumario: 'Proyecto Final de Curso POO en JAVA realizado en consola',
      descripcion:  `aplicación de gestión de
      biblioteca en Java, utilizando conceptos de programación orientada a
      objetos. La aplicación permitirá a los usuarios administrar el inventario de
      libros de una biblioteca, registrar préstamos y devoluciones, y realizar
      búsquedas en la colección de libros. `,
      linkProyecto: 'https://github.com/okijulian/proyectoBiblioteca',
      tags: [Tag.JAVA,Tag.GIT],
      imagen: ["../../assets/menulibros.png",
      "../../assets/menuprestamo.png",
      "../../assets/menuprincial.png",
      "../../assets/menuusuarios.png"
      ],
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
