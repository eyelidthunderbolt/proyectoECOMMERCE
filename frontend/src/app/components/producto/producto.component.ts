import { Component,Input } from '@angular/core';
import {Producto} from '../../models/producto';
import { ProductosService } from 'src/app/services/productos.service';
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})


export class ProductoComponent {
  imagePath: string = ""



  @Input() producto : Producto = {
    _id: "",
    foto: "",
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: 0,
    stock: 0
  }

  constructor(private dataService: DataService, private productoService : ProductosService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  anhadirProducto(producto : Producto){
    console.log("+++++++")

    this.dataService.compartirProducto(producto.nombre, producto.precio, producto._id, producto.categoria);



  }


}
