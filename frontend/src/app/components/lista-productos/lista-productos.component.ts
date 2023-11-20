import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  productos: Producto[] = [];
  visibilidad : boolean = true;

  constructor(public productoService: ProductosService, private dataService : DataService) {}

  recogerProductos() { //metodo para obtener el listado de productos de la base de datos
    return this.productoService.mostrarProductos()
      .subscribe(res => {
        this.productos = res as Producto[];
        console.log(res)
      });
  }

  ngOnInit(): void { // para que lo cargue nada mas cargar el modulo
    this.recogerProductos();
    
    this.dataService.myData$.subscribe((data) => {
      this.visibilidad = data;
    });
  }
}
