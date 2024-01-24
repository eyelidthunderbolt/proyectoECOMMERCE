import { Component,Input,OnInit } from '@angular/core';
import { Carrito } from 'src/app/models/carrito';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-carrito-nuevo',
  templateUrl: './carrito-nuevo.component.html',
  styleUrls: ['./carrito-nuevo.component.css']
})
export class CarritoNuevoComponent {

    carrito$ : Carrito = new Carrito();

    constructor(private dataService: DataService){}
    
    ngOnInit(){

      this.dataService.carritoSource$.subscribe((carrito : Carrito) =>{
        this.carrito$ = carrito;
      });
    }  

    
  


}
