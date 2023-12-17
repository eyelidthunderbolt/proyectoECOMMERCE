import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto';

declare var M : any

@Component({
  selector: 'app-modificar-productos',
  templateUrl: './modificar-productos.component.html',
  styleUrls: ['./modificar-productos.component.css']
})
export class ModificarProductosComponent {

  constructor(public productosService : ProductosService){}

  obtenerProductos(){

    this.productosService.mostrarProductos()
    .subscribe(res => {
      this.productosService.productos = res as Producto[]; // mete en el array de empleados definido en Services la res que trae los empleados de la base de datos
      console.log(res)
    })
  }

  editarProducto(producto: Producto){
    this.productosService.productoSeleccionado = producto;
  }

  eliminarProducto(_id : string){
    if(confirm("Desea eliminar producto?")){
      this.productosService.eliminarProducto(_id)
      .subscribe(res => {
        this.obtenerProductos();
      });
      M.toast({html: "Producto Eliminado"})
    }

  }

  ngOnInit(): void{

    this.obtenerProductos();
  }

}
