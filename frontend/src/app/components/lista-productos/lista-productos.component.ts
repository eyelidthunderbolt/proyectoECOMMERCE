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
  categoria : string = 'Todos los productos'
  

  constructor(public productoService: ProductosService, private dataService : DataService) {}

  recogerProductos() { //metodo para obtener el listado de productos de la base de datos
    return this.productoService.mostrarProductos()
      .subscribe(res => {
        this.productos = res as Producto[];
        console.log(res)
      });
  }

  mostrarProductos(){ // este es el metodo para mostrar los productos en lista-productos

    if(this.categoria == 'Todos los productos'){

      this.recogerProductos();

    }

    else{

      this.productoService.mostrarProductos()
      .subscribe(res => {
        const productos = res as Producto[];
        const productosFiltrados = productos.filter((producto : Producto) => producto.categoria === this.categoria);
        this.productos = productosFiltrados;
      })
    }
  }


  ngOnInit(): void { // para que lo cargue nada mas cargar el modulo
    this.dataService.categoria$.subscribe((dato) =>{ // aqui cargo la categoria que me viene del otro componente
      this.categoria = dato

      this.mostrarProductos();
    })





  }




}
