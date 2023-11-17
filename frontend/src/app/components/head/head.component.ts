import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {

  usuario : Usuario;
  usuarios : Usuario[]

  constructor(public usuariosService: UsuariosService){

    this.usuario = new Usuario
    this.usuarios = [];
  }

  recogerUsuarios() { //metodo para obtener el listado de usuarios de la base de datos
    return this.usuariosService.mostrarUsuarios()
      .subscribe(res => {
        this.usuarios = res as Usuario[];
        console.log(res)
      });
  }

  login(usuario : string, password : string){
    let listaUsuarios : Usuario[];

    //listaUsuarios = this.recogerUsuarios();


  }

}
