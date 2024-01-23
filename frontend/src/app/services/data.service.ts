import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private productoSource = new BehaviorSubject<any>(null);
  productoSource$ = this.productoSource.asObservable();

  private productoNombreSource = new BehaviorSubject<string>('');
  productoNombre$ = this.productoNombreSource.asObservable();

  private productoPrecioSource = new BehaviorSubject<number>(0);
  productoPrecio$ = this.productoPrecioSource.asObservable();

  private productoIDSource = new BehaviorSubject<string>('');
  productoID$ = this.productoIDSource.asObservable();

  private categoriaSource = new BehaviorSubject<string>('Todos los productos');
  categoria$ = this.categoriaSource.asObservable(); // la categoria que quiero pasar

  private usuarioIDSource = new BehaviorSubject<string>('');
  usuarioIDSource$ = this.usuarioIDSource.asObservable();


  compartirProducto(productoNombre: string, productoPrecio: number, productoID: string) {
    console.log("+++++++++ al ajillo")
    this.productoSource.next({ productoNombre, productoPrecio, productoID });
    // this.productoNombreSource.next(productoNombre);
    this.productoPrecioSource.next(productoPrecio);
    // this.productoIDSource.next(productoID)
  }

  compartirUsuario(idUsuario: string) {

    this.usuarioIDSource.next(idUsuario)

  }

  compartirCategoria(categoria: string) {

    this.categoriaSource.next(categoria); // el metodo pa pillar la categoria



  }




}