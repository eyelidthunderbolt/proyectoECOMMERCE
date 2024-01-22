import { Component,Input } from '@angular/core';
import { Carrito } from 'src/app/models/carrito';

@Component({
  selector: 'app-carrito-nuevo',
  templateUrl: './carrito-nuevo.component.html',
  styleUrls: ['./carrito-nuevo.component.css']
})
export class CarritoNuevoComponent {

    @Input() carrito = new Carrito();

  recibirCarrito(carrito : Carrito){

    this.carrito = carrito;
  }


}
