import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Carrito } from 'src/app/models/carrito';
import { CarritosService } from 'src/app/services/carritos.service';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CPadreComponent {

  public idUsuario : string | null = '';
  public pedidos : Carrito[] = [];
  public nCompras : number = 0;
  public mensajeEnPadre : string= '';

  constructor(private dataService: DataService, private carritoService: CarritosService){}

  recogerPedidos(){

    let token: string | null = sessionStorage.getItem('token');
          this.idUsuario = token;


    this.carritoService.mostrarCarritos()
      .subscribe(res => {
        const carritos = res as Carrito[];

        const carritosFiltrados = carritos.filter((carrito: Carrito) => carrito.idUsuario === this.idUsuario);
        const encontrado = carritosFiltrados.length > 0;

        if(encontrado){

          this.pedidos = carritosFiltrados;

          for (let index = 0; index < this.pedidos.length; index++) {
             this.nCompras++

          }





        }



      });

  }

  recibirMensaje(mensaje : string){

    this.mensajeEnPadre = mensaje;
  }

  ngOnInit(){

    this.dataService.usuarioIDSource$.subscribe((data) => {
      this.idUsuario = data;
      this.recogerPedidos()
      console.log(this.idUsuario);

    });
  }

}
