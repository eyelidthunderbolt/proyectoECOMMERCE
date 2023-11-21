import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Carrito } from 'src/app/models/carrito';
import { CarritosService } from 'src/app/services/carritos.service';

declare var M : any;

@Component({
  selector: 'app-lat-der',
  templateUrl: './lat-der.component.html',
  styleUrls: ['./lat-der.component.css']
})
export class LatDerComponent {

  visibilidad : boolean = true;


  constructor(private dataService : DataService, private carritoService : CarritosService){

  } //añadir el argumento carritoService al constructor

  guardarCarrito(carrito : Carrito){



    this.carritoService.crearCarrito(carrito)
    .subscribe((res: any) =>{

      console.log(res);
      M.toast({html:"Compra Realizada"})



    })
  }

  ngOnInit(): void {

    this.dataService.myData$.subscribe((data) => {
      this.visibilidad = data;
    });
  }
}


