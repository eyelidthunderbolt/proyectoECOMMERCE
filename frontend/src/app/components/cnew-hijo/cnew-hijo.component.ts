import { Component, OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Carrito } from 'src/app/models/carrito';
import { CarritosService } from 'src/app/services/carritos.service';

@Component({
  selector: 'app-cnew-hijo',
  templateUrl: './cnew-hijo.component.html',
  styleUrls: ['./cnew-hijo.component.css']
})
export class CnewHijoComponent {

  @Input() carrito : Carrito[] = []
  @Output() eventoCompras = new EventEmitter<number>();
  public totalCompras : number = 0;

  ngOnChanges(){

    for (let index = 0; index < this.carrito.length; index++) {

      this.totalCompras++
      
      
    }

    this.eventoCompras.emit(this.totalCompras)
  }



}
