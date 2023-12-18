import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto';
import { NgForm } from '@angular/forms';

declare var M : any;

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent {

  constructor(public productosService: ProductosService){}

  anhadirProducto(form : NgForm){

    if(form.value._id){

      this.productosService.actualizarProducto(form.value)
      .subscribe(res => {

        console.log(res);
        this.resetForm();
        M.toast({html : "Producto Actualizado"})
        this.obtenerProductos()

      })
    }

    else {
      form.value._id = null;
      this.productosService.crearProducto(form.value)
      .subscribe(res =>{
        console.log(res)
        this.resetForm(form)
        M.toast({html : "Producto Almacenado"})
        this.obtenerProductos();
      })
    }
    }

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

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.productosService.productoSeleccionado = new Producto;
    }
  }

}
