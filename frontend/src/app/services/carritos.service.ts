import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrito,CarritoItem } from '../models/carrito';

@Injectable({ providedIn: 'root' })

export class CarritosService {
  carritoSeleccionado: Carrito;
  carritos: Carrito[]; // array para almacenar los productos que vamos obteniendo
  readonly URL = 'http://localhost:3000/api/carritos';

  constructor(private http: HttpClient) {
    this.carritoSeleccionado = new Carrito();
    this.carritos = [];
  }

  mostrarCarritos() {
    return this.http.get(this.URL); // devuelve todos los productos en array
  }

  crearCarrito(carrito: Carrito) {
    return this.http.post(this.URL, carrito);
  }

  /*actualizarCarrito(carrito: Carrito) {
    return this.http.put(this.URL + `/${carrito._id}`, carrito)
  }*/

  eliminarCarrito(_id: string) {
    return this.http.delete(this.URL + `/${_id}`)
  }
}
