import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  private usuarioIDSource = new BehaviorSubject<string>('');
  usuarioIDSource$ = this.usuarioIDSource.asObservable();

  compartirProducto(productoNombre: string, productoPrecio: number) {
    this.productoNombreSource.next(productoNombre);
    this.productoPrecioSource.next(productoPrecio);
  }

  compartirUsuario(idUsuario : string){

    this.usuarioIDSource.next(idUsuario)

  }



  updateVisibilidad(nuevaVisibilidad: boolean) {
    this.myDataSubject.next(nuevaVisibilidad);
  }
}