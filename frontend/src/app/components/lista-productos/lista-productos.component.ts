import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  productos: Producto[] = [];

  constructor(public productoService: ProductosService) {}

  recogerProductos() {
    return this.productoService.mostrarProductos()
      .subscribe(res => {
        this.productos = res as Producto[];
        console.log(res)
      });
  }

  ngOnInit(): void {
    this.recogerProductos();
  }
}
