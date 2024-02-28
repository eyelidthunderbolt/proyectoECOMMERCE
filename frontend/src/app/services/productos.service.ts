import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
import { Carrito,CarritoItem } from '../models/carrito';
import { catchError } from 'rxjs';

declare var M: any;

@Injectable({ providedIn: 'root' })
export class ProductosService {
  productoSeleccionado: Producto;
  productos: Producto[]; // array para almacenar los productos que vamos obteniendo
  readonly URL = 'http://localhost:3000/api/productos';
  imagePath: string;
  imagenArchivo?: File | null;

  constructor(private http: HttpClient) {
    this.productoSeleccionado = new Producto();
    this.productos = [];
    this.imagePath = "";
    this.imagenArchivo = null;
  }

  mostrarProductos() {
    return this.http.get(this.URL); // devuelve todos los productos en array
  }

  crearProducto(producto: Producto) {
    return this.http.post(this.URL, producto);
  }

  actualizarProducto(producto: Producto) {
    return this.http.put(this.URL + `/${producto._id}`, producto)
  }

  eliminarProducto(_id: string) {
    return this.http.delete(this.URL + `/${_id}`)
  }

  guardarImagen(archivo : File, path : string, nombreImagen:string){
  let ruta = path;
  this.imagenArchivo = archivo;
  }

  actualizarStock(_id:string, cantidad:number){

    return this.http.put(this.URL +`/${_id}/${cantidad}`, {})
    .pipe(
      catchError((error) => {
        console.error('Error al actualizar el stock:', error);
        M.toast({ html: "Error stock insuficiente" })
        throw error;
      })
  )}

  comprobarStock(_id:string, cantidad:number){
    debugger;
    console.log("+++++", _id, cantidad);

    return this.http.get(this.URL +`/comprobar/${_id}/${cantidad}`)
    .pipe(
      catchError((error) => {
        console.error('Error al actualizar el stock:', error);
        M.toast({ html: "Error stock insuficiente" })
        throw error;
      })
  )}

  setImagePath(path: string) {
    this.imagePath = path;
  }

  getImagePath(): string {
    return this.imagePath;
  }


}
