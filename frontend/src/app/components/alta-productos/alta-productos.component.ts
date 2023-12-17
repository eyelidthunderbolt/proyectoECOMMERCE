import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto';
import { NgForm } from '@angular/forms';

declare var M : any;

@Component({
  selector: 'app-alta-productos',
  templateUrl: './alta-productos.component.html',
  styleUrls: ['./alta-productos.component.css']
})



export class AltaProductosComponent {

  constructor(public productosService: ProductosService){}

  anhadirProducto(form : NgForm){

    form.value._id = null;
    this.productosService.crearProducto(form.value)
    .subscribe(res =>{
      console.log(res);
      this.resetForm(form)
      M.toast({html : "Producto almacenado"})
    })
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.productosService.productoSeleccionado = new Producto;
    }
  }

}
