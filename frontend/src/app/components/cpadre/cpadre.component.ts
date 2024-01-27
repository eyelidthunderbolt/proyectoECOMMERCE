import { Component,OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CPadreComponent {

  idUsuario : string | null = ""
  mensaje : string  = ""

  constructor(private usuariosService: UsuariosService){}

  recogerUsuario(){
    let token: string | null = sessionStorage.getItem('token');
          this.idUsuario = token;
  }

  recogerMensaje(mensaje : string){
    this.mensaje =mensaje;
  }

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.recogerUsuario();



  }



}


