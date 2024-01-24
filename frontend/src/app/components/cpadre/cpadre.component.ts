import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CPadreComponent {

  idUsuario : string = ""
  nombreUsuario : string = ""
  email : string = ""

  constructor(private dataService : DataService, private usuariosService : UsuariosService){}

  ngOnInit(){

    let token: string | null = sessionStorage.getItem('token');

    if (token != null) {
      this.idUsuario = token.trim();
    };



    

    this.usuariosService.mostrarUsuarios()
      .subscribe(res => {
        const usuarios = res as Usuario[]
        const usuariosFiltrados = usuarios.filter((usuario: Usuario) => usuario._id === this.idUsuario);
        const logeado = usuariosFiltrados.length > 0;

        if(logeado) {
          this.nombreUsuario = usuariosFiltrados[0].nombre
        }
        
      });

  }

  recibirEmail(email : string){
  
    this.email = email

  }

}
