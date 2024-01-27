import { Component, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Carrito,CarritoItem } from 'src/app/models/carrito';
import { CarritosService } from 'src/app/services/carritos.service';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  styleUrls: ['./ejercicio7.component.css']
})
export class Ejercicio7Component {

  productos : CarritoItem[] = []
  visibilidad: boolean = false;
  constructor(private dataService: DataService, private carritosService : CarritosService){}



  ngOnChanges(){



  }

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  this.productos = [];
    console.log("+++++porraItems" + this.productos);
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.dataService.itemsSource$.subscribe((carrito) =>{
      this.productos = carrito;
    })

  }
}
