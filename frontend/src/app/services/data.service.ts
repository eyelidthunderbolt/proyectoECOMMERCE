import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto';
import {Carrito} from '../models/carrito';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private productoNombreSource = new BehaviorSubject<string>('');
  productoNombre$ = this.productoNombreSource.asObservable();

  private productoPrecioSource = new BehaviorSubject<number>(0);
  productoPrecio$ = this.productoPrecioSource.asObservable();

  private categoriaSource = new BehaviorSubject<string>('Todos los productos');
  categoria$ = this.categoriaSource.asObservable(); // la categoria que quiero pasar

  private usuarioIDSource = new BehaviorSubject<string>('');
  usuarioIDSource$ = this.usuarioIDSource.asObservable();

  private usuarioSource = new BehaviorSubject<Usuario>(new Usuario);
  usuarioSource$ = this.usuarioSource.asObservable();

  private carritoSource = new BehaviorSubject<Carrito>(new Carrito);
  carritoSource$ = this.carritoSource.asObservable();

  compartirUsuario2(usuario : Usuario){

    this.usuarioSource.next(usuario)
  }


  compartirProducto(productoNombre: string, productoPrecio: number) {
    this.productoNombreSource.next(productoNombre);
    this.productoPrecioSource.next(productoPrecio);
  }

  compartirUsuario(idUsuario: string) {

    this.usuarioIDSource.next(idUsuario)

  }

  compartirCategoria(categoria: string) {

    this.categoriaSource.next(categoria); // el metodo pa pillar la categoria



  }

  compartirCarrito(carrito : Carrito){
    this.carritoSource.next(carrito)
  }




}