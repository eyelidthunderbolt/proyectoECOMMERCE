import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Carrito } from 'src/app/models/carrito';
//import { CarritoService } from '../../services/carritos.service';

@Component({
  selector: 'app-lat-der',
  templateUrl: './lat-der.component.html',
  styleUrls: ['./lat-der.component.css']
})
export class LatDerComponent {

  visibilidad : boolean = true;

  constructor(private dataService : DataService){} //añadir el argumento carritoService

  guardarCarrito(){}

  ngOnInit(): void {

    this.dataService.myData$.subscribe((data) => {
      this.visibilidad = data;
    });
  }
}


