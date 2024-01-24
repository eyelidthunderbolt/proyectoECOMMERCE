import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Carrito } from 'src/app/models/carrito';
import { CarritosService } from 'src/app/services/carritos.service';

@Component({
  selector: 'app-cnew-padre',
  templateUrl: './cnew-padre.component.html',
  styleUrls: ['./cnew-padre.component.css']
})
export class CnewPadreComponent {

  public idUsuario : string | null = '';
  public pedidos : Carrito[] = [];
  public totalFacturacion : number = 0;
  public totalCompras : number = 0;

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
  

          
          

        }



      });

  }

  recibirCompras(compras : number){

    this.totalCompras=compras;
  }

  ngOnInit(): void {
   
      this.recogerPedidos()
      console.log(this.idUsuario);

  }

}
