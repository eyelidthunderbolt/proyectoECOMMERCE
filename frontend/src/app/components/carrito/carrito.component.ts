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

  public carrito: Carrito = new Carrito();

  @Output() eventoCarrito = new EventEmitter<Carrito>();

  //visibilidad: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Suscribirse al cambio de productoPrecio$
    this.productoPrecio$.subscribe((nuevoPrecio) => {
      this.carrito.totalCompra += nuevoPrecio;
    });

    // Suscribirse al cambio de productoNombre$
    this.productoNombre$.subscribe((nuevoNombre) => {
      if (nuevoNombre !== "") {
        // Verificar si el producto ya existe en el carrito
        const itemExistente = this.carrito.items.find((item) => item.nombre === nuevoNombre);
        if (itemExistente) {
          // Si existe, incrementar la cantidad
          itemExistente.cantidad++;
        } else {
          // Si no existe, agregar un nuevo ítem al carrito
          const nuevoItem = new CarritoItem();
          nuevoItem.nombre = nuevoNombre;

          // Suscribirse al cambio de productoPrecio$ para obtener el valor actual
          this.productoPrecio$.subscribe((precioActual) => {
            nuevoItem.precio = precioActual;
          });

          nuevoItem.cantidad = 1;
          this.carrito.items.push(nuevoItem);
        }
      }
    });
  }

  realizarCompra() {
    let token: string | null = sessionStorage.getItem('token');

    if (token != null) {
      this.carrito.idUsuario = token.trim();
      this.eventoCarrito.emit(this.carrito);

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
