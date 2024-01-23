import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Carrito,CarritoItem } from 'src/app/models/carrito';
import { CarritosService } from 'src/app/services/carritos.service';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';


declare var M: any;

@Component({
  selector: 'app-lat-der',
  templateUrl: './lat-der.component.html',
  styleUrls: ['./lat-der.component.css']
})
export class LatDerComponent {




  constructor(private dataService: DataService, private carritoService: CarritosService, private productoService: ProductosService) {

  } //añadir el argumento carritoService al constructor

  guardarCarrito(carrito: Carrito) {

    if (carrito.items.length > 0) {

      this.carritoService.crearCarrito(carrito)
        .subscribe((res: any) => {

          console.log(res);
          M.toast({ html: "Compra Realizada" })

          for (let index = 0; index < carrito.items.length; index++) {

            this.productoService.actualizarStock(carrito.items[index].idProducto,carrito.items[index].cantidad)
              .subscribe((res: any) => {
                console.log(res);

              });

          }

        })
    }

    else{

      M.toast({ html: "Carrito Vacio" })

    }


  }


}


