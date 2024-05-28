import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Projecto } from '../_models/Projecto';

@Component({
  selector: 'app-proyecto-modal',
  templateUrl: './proyecto-modal.component.html',
  styleUrl: './proyecto-modal.component.css'
})
export class ProyectoModalComponent {

  projecto ={} as Projecto;

  constructor (public bsModalref: BsModalRef){

  }



}
