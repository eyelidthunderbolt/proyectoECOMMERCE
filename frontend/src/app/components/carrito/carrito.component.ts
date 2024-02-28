import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Carrito, CarritoItem } from '../../models/carrito';

declare var M: any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  @Input() idUsuarioPadre: string | null = ""
  productoNombre$ = this.dataService.productoNombre$;
  productoPrecio$ = this.dataService.productoPrecio$;
  productoID$ = this.dataService.productoID$
  productoSource$ = this.dataService.productoSource$

  public carrito: Carrito = new Carrito();

  @Output() eventoCarrito = new EventEmitter<Carrito>();


  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.productoSource$.subscribe((p) => {


      if (p.productoNombre !== "") {
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
          nuevoItem.categoria = p.productoCategoria
          nuevoItem.precio = p.productoPrecio;
          nuevoItem.idProducto = p.productoID;
          nuevoItem.cantidad = 1;

          this.carrito.items.push(nuevoItem);
        }
      }
    });

    // Suscribirse al cambio de productoPrecio$
    this.productoPrecio$.subscribe((nuevoPrecio) => {
      this.carrito.totalCompra += nuevoPrecio;
    });

  }

  realizarCompra() {

    console.log(this.idUsuarioPadre)
    debugger
    if (this.idUsuarioPadre === null || this.idUsuarioPadre === "") {
      M.toast({ html: "Usuario no logeado. Ingrese antes de realizar compra" });
      return;
    }
    this.carrito.idUsuario = this.idUsuarioPadre
    this.carrito._id = null;
    this.eventoCarrito.emit(this.carrito);

    // Limpiar el carrito después de realizar la compra
    this.carrito = new Carrito();

  }

  vaciar() {
    this.carrito = new Carrito();
  }
}
