import { Component,Input } from '@angular/core';
import {Producto} from '../../models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})


export class ProductoComponent {

  @Input() producto : Producto = {
    _id: "",
    foto: "",
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: 0,
    cantidad: 0,
    stock: 0,
  }

}
