import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Carrito } from '../../models/carrito'
//import {CarritoService} from '../../services/carritos.service'

declare var M: any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  //public arrayProductos : Array<string>=[this.dataService.productoNombre$.toString()]
  productoNombre$ = this.dataService.productoNombre$;
  productoPrecio$ = this.dataService.productoPrecio$;

  public arrayProductos: Array<string> = []
  public total: number = 0;
  public carrito: Carrito;

  @Output() eventoCarrito = new EventEmitter<Carrito>();

  constructor(private dataService: DataService) {
    this.carrito = new Carrito()
  }

  ngOnInit() {


    this.productoNombre$ = this.dataService.productoNombre$;
    this.productoPrecio$ = this.dataService.productoPrecio$;

    this.arrayProductos = [];

    // Suscribirse al cambio de productoPrecio$
    this.productoPrecio$.subscribe((nuevoPrecio) => {
      this.total += nuevoPrecio;
    });

    // Suscribirse al cambio de productoNombre$
    this.productoNombre$.subscribe((nuevoNombre) => {
      this.arrayProductos.push(nuevoNombre);
    });


  }

  realizarCompra() {

    let carrito: Carrito = new Carrito();

    let token: string | null = sessionStorage.getItem('token');
    let idUsuario: string

    if (token != null) {

      idUsuario = token;

      carrito.idUsuario = idUsuario.trim();
      carrito.listaProductos = this.arrayProductos;
      carrito.totalCompra = this.total;
      this.eventoCarrito.emit(carrito)
      console.log(carrito.idUsuario);
      console.log(this.arrayProductos.length);
      while (this.arrayProductos.length > 0) {
        this.arrayProductos.pop();
      }
      this.total = 0;




    }

    else if (token == null) {
      M.toast({ html: "Usuario no logeado. Ingrese antes de realizar compra" })
    }





  }

  vaciar() {
    this.arrayProductos = [];
    this.total = 0;
  }

}




