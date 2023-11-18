import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {

  // usuario : Usuario;
  // usuarios : Usuario[]
  mensajeBienvenida : string ="";


  constructor(public usuariosService: UsuariosService, private router: Router){

    // this.usuario = new Usuario
    // this.usuarios = [];


  }

  login(email : string, password : string){
    this.usuariosService.mostrarUsuarios()
      .subscribe(res => {
        const usuarios = res as Usuario[];

        const usuariosFiltrados = usuarios.filter((usuario: Usuario) => usuario.email === email && usuario.password === password);
        const logeado = usuariosFiltrados.length > 0;

        if(logeado){
          this.mensajeBienvenida = "Bienvenido " + usuariosFiltrados[0].nombre;
        }

        else{
          this.mensajeBienvenida ="Email o contraseña incorrectos"
        }



      });
  }

  navegarARegistro(){

    this.router.navigateByUrl('/registro');
  }
}
