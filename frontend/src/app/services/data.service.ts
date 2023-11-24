import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private myDataSubject = new BehaviorSubject<boolean>(true);
  myData$ = this.myDataSubject.asObservable();

  private productoNombreSource = new BehaviorSubject<string>('');
  productoNombre$ = this.productoNombreSource.asObservable();

  private productoPrecioSource = new BehaviorSubject<number>(0);
  productoPrecio$ = this.productoPrecioSource.asObservable();

 

  compartirProducto(productoNombre: string, productoPrecio: number) {
    this.productoNombreSource.next(productoNombre);
    this.productoPrecioSource.next(productoPrecio);
  }



  updateVisibilidad(nuevaVisibilidad: boolean) {
    this.myDataSubject.next(nuevaVisibilidad);
  }
}