import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projecto } from '../_models/Projecto';
import { Tag } from '../_models/Tags';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projectos ={} as Projecto[];

  isCollapsed:boolean=true;

  typescript: boolean= false;
  angular: boolean= false;
  html5: boolean= false;
  css3: boolean= false;
  python: boolean= false;
  csharp: boolean= false;
  node: boolean= false;
  asp: boolean= false;
  java: boolean= false;
  sql: boolean= false;
  django: boolean= false;


  constructor(private titleService: Title, private projectsService: ProjectsService){
    this.titleService.setTitle('OSCAR J - PORTFOLIO')

}
  ngOnInit(): void {
    this.projectos=this.projectsService.GetProject();

  }

  Filtro(){
    let filtarTags: Tag[]=[];

    if(this.typescript){
      filtarTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filtarTags.push(Tag.ANGULAR);
    }
    if(this.asp){
      filtarTags.push(Tag.ASPNET);
    }
    if(this.python){
      filtarTags.push(Tag.PYTHON);
    }
    if(this.html5){
      filtarTags.push(Tag.HTML);
    }
    if(this.css3){
      filtarTags.push(Tag.CSS);
    }
    if(this.java){
      filtarTags.push(Tag.JAVA);
    }
    if(this.node){
      filtarTags.push(Tag.NODEJS);
    }
    if(this.sql){
      filtarTags.push(Tag.SQL);
    }

    if(this.django){
      filtarTags.push(Tag.DJANGO);
    }

    if(this.csharp){
      filtarTags.push(Tag.CSHARP);
    }


    this.projectos= this.projectsService.GetProyectosPorFiltro(filtarTags);
  }

  ResetFiltros(){
    this.typescript= false;
    this.angular= false;
    this.html5= false;
    this.css3= false;
    this.python= false;
    this.csharp= false;
    this.node= false;
    this.asp= false;
    this.java= false;
    this.sql= false;
    this.django= false;

    this.projectos=this.projectsService.GetProject();
  }

}

