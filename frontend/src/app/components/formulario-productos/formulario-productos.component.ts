import { AfterViewInit, Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent {

  public categorias: Array<string> = ["Camiseta", "Pantalon", "Zapatillas", "Relojes"];

  constructor(public productosService: ProductosService) { }

  ngAfterViewInit() {
    // Script de inicialización de Materialize CSS
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  anhadirProducto(form: NgForm) {

    if (form.value.nombre == "" || form.value.descripcion == "" || form.value.categorias == "" || (form.value.precio == "" || isNaN(form.value.precio)) || (form.value.stock == "" || isNaN(form.value.stock))) {

      M.toast({ html: "Faltan campos requeridos / Valores incorrectos" })


    }

    else if (form.value._id) {
      this.productosService.actualizarProducto(form.value)
        .subscribe(res => {

          console.log(res);
          this.resetForm();
          M.toast({ html: "Producto Actualizado" })
          this.obtenerProductos()


        })
    }

    else {
      form.value._id = null;
      this.productosService.crearProducto(form.value)
        .subscribe(res => {
          console.log(res)
          this.resetForm(form)
          M.toast({ html: "Producto Almacenado" })
          this.obtenerProductos();
        })
    }

  }

  obtenerProductos() {

    this.productosService.mostrarProductos()
      .subscribe(res => {
        this.productosService.productos = res as Producto[]; // mete en el array de empleados definido en Services la res que trae los empleados de la base de datos
        console.log(res)
      })
  }

  editarProducto(producto: Producto) {
    this.productosService.productoSeleccionado = producto;
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.productosService.productoSeleccionado = new Producto;
    }
  }

  convertirACentimos(precio: number) {
    var precioFinal = 0
    precioFinal = precio * 100
    return precioFinal
  }

}
