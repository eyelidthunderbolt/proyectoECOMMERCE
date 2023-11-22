import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  productos: Producto[] = [];

  constructor(public productoService: ProductosService, private dataService : DataService) {}

  recogerProductos(categoria:string) { //se obtiene la lista de productos de la base de datos
    return this.productoService.mostrarProductos()
      .subscribe(res => {
        this.productos = res as Producto[];
        console.log(res)
        const productosCategoria = this.productos.filter((Producto:Producto)=> Producto.categoria === categoria); //Guardamos los porductos filtrados por la categoria que se pasa en el tipo String en el metodo
      });
  }
}

