import { Component, Input } from '@angular/core';
import { Projecto } from '../_models/Projecto';

@Component({
  selector: 'app-proyectos-card',
  templateUrl: './proyectos-card.component.html',
  styleUrl: './proyectos-card.component.css'
})
export class ProyectosCardComponent {

  @Input() projecto= {} as Projecto;


}
