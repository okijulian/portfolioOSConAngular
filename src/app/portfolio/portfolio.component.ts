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

  projecto ={} as Projecto[];

  isCollapsed:boolean=true;

  constructor(private titleService: Title, private projectsService: ProjectsService){
    this.titleService.setTitle('OSCAR J - PORTFOLIO')

}
  ngOnInit(): void {
    this.projecto=this.projectsService.GetProject();

  }
}
