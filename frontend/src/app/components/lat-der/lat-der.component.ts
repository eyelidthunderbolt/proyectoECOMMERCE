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
  public idUsuario : string = ""




  constructor(private dataService: DataService, private carritoService: CarritosService, private productoService: ProductosService) {} //añadir el argumento carritoService al constructor

  async guardarCarrito(carrito: Carrito) {

    try {
      await this.comprobarCarrito(carrito);
    } catch (e) {
      console.log('eso e no weno', e);
      return;
    }

    console.log('eso e weno')





    if (carrito.items.length > 0) {

      this.carritoService.crearCarrito(carrito)
        .subscribe((res: any) => {

          console.log(res);


          for (let index = 0; index < carrito.items.length; index++) {

            this.productoService.actualizarStock(carrito.items[index].idProducto,carrito.items[index].cantidad)
              .subscribe((res: any) => {
                if (res.status !== 200) {
                  M.toast({ html: res.message });
                  return;
                }


              });

          }
          M.toast({ html: "Compra Realizada" })

        })
    }

    else{

      M.toast({ html: "Carrito Vacio" })

    }


  }

  async comprobarCarrito(carrito: Carrito){
    const promesas = [];
    for (let index = 0; index < carrito.items.length; index++) {

      const comprobacion: any = await this.productoService.comprobarStock(carrito.items[index].idProducto, carrito.items[index].cantidad).toPromise()

      promesas.push(comprobacion);
    }
    return Promise.all(promesas);
  }

  ngOnInit() {

    this.idUsuario = sessionStorage.getItem('token') || "";
    console.log(this.idUsuario)
    this.dataService.usuarioIDSource$.subscribe((data) => {

      this.idUsuario = data;
      console.log(this.idUsuario);

    });
  }


}


