import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Carrito } from 'src/app/models/carrito';
import { CarritosService } from 'src/app/services/carritos.service';


@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {

  public idUsuario : string = '';
  public pedidos : Carrito[] = [];

  constructor(private dataService: DataService, private carritoService: CarritosService){}

  recogerPedidos(idUsuario : string){

    this.carritoService.mostrarCarritos()
      .subscribe(res => {
        const carritos = res as Carrito[];

        const carritosFiltrados = carritos.filter((carrito: Carrito) => carrito.idUsuario === idUsuario);
        const encontrado = carritosFiltrados.length > 0;

        if(encontrado){

          this.pedidos = carritosFiltrados;
          console.log(carritosFiltrados[0].idUsuario);

        }



      });

  }

  ngOnInit(): void {

    this.dataService.usuarioIDSource$.subscribe((data) => {
      this.idUsuario = data;
      this.recogerPedidos(this.idUsuario)
      console.log(this.idUsuario);

    });
  }

}
