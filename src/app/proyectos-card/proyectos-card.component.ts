import { Component, Input } from '@angular/core';
import { Projecto } from '../_models/Projecto';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProyectoModalComponent } from '../proyecto-modal/proyecto-modal.component';

@Component({
  selector: 'app-proyectos-card',
  templateUrl: './proyectos-card.component.html',
  styleUrl: './proyectos-card.component.css'
})
export class ProyectosCardComponent {

  @Input() projecto= {} as Projecto;
  bsModalRef?:BsModalRef;

constructor (private modalService: BsModalService){

}
OpenProyectoModal(){

  const modalOptions: ModalOptions={
    class:"modal-xl",
    initialState:{
      projecto: this.projecto
    }


  };

  this.bsModalRef= this.modalService.show(ProyectoModalComponent,modalOptions);
}

}
