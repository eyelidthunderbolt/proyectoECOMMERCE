import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Carrito, CarritoItem } from '../../models/carrito';

declare var M: any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productoNombre$ = this.dataService.productoNombre$;
  productoPrecio$ = this.dataService.productoPrecio$;
  productoID$ = this.dataService.productoID$
  productoSource$ = this.dataService.productoSource$

  public carrito: Carrito = new Carrito();

  @Output() eventoCarrito = new EventEmitter<Carrito>();
  @Output() eventoItems = new EventEmitter<CarritoItem[]>();



  constructor(private dataService: DataService) {}

  ngOnInit() {


    this.productoSource$.subscribe((p) => {

      const nuevoItem = new CarritoItem();
      nuevoItem.precio = p.productoPrecio
      nuevoItem.nombre = p.productoNombre
      this.carrito.items.push(nuevoItem)


      /*if (p.productoNombre !== "") {
        // Verificar si el producto ya existe en el carrito
        const itemExistente = this.carrito.items.find((item) => item.nombre === p.productoNombre);
        if (itemExistente) {

          // Si existe, incrementar la cantidad
          itemExistente.cantidad++;
        } else {
          if (!p) return;

          // Si no existe, agregar un nuevo ítem al carrito
          const nuevoItem = new CarritoItem();
          nuevoItem.nombre = p.productoNombre;
          nuevoItem.precio = p.productoPrecio;
          nuevoItem.idProducto = p.productoID;
          nuevoItem.cantidad = 1;

          this.carrito.items.push(nuevoItem);
        }
      }*/
    });



    // Suscribirse al cambio de productoPrecio$
    this.productoPrecio$.subscribe((nuevoPrecio) => {

      this.carrito.totalCompra += nuevoPrecio;
    });



  }

  realizarCompra() {
    let token: string | null = sessionStorage.getItem('token');

    if (token != null) {
      this.carrito.idUsuario = token.trim();
      //this.eventoCarrito.emit(this.carrito);
      this.dataService.compartirCarritoItems(this.carrito.items);

      // Limpiar el carrito después de realizar la compra
      this.carrito = new Carrito();
    } else {
      M.toast({ html: "Usuario no logeado. Ingrese antes de realizar compra" });
    }
  }

  vaciar() {
    this.carrito = new Carrito();
  }
}
