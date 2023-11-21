import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import {DataService} from '../../services/data.service'
import {Carrito} from '../../models/carrito'
//import {CarritoService} from '../../services/carritos.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  //public arrayProductos : Array<string>=[this.dataService.productoNombre$.toString()]
  productoNombre$ = this.dataService.productoNombre$;
  productoPrecio$ = this.dataService.productoPrecio$;

  public arrayProductos : Array<string>=[]
  public total : number=0;
  public carrito : Carrito;

  @Output() eventoCarrito = new EventEmitter<Carrito>();

  constructor(private dataService: DataService) {
    this.carrito = new Carrito()
  }

  ngOnInit(){

    this.productoNombre$ = this.dataService.productoNombre$;
    this.productoPrecio$ = this.dataService.productoPrecio$;

    // Suscríbete al cambio de productoPrecio$
    this.productoPrecio$.subscribe((nuevoPrecio) => {
      this.total += nuevoPrecio;
    });

    // Suscríbete al cambio de productoNombre$
    this.productoNombre$.subscribe((nuevoNombre) => {
      this.arrayProductos.push(nuevoNombre);
    });


  }

  realizarCompra(){

    let carrito : Carrito = new Carrito();

    carrito.emailUsuario = "";
    carrito.listaProductos = this.arrayProductos;
    this.eventoCarrito.emit(carrito)
    while (this.arrayProductos.length > 0){
      this.arrayProductos.pop();
    }
    this.total = 0;

  }

  }




