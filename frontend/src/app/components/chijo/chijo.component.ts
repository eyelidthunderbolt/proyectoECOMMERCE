import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-chijo',
  templateUrl: './chijo.component.html',
  styleUrls: ['./chijo.component.css']
})
export class CHijoComponent {

  @Input() idDelPadre: string = ""
  @Output() enviarEmail = new EventEmitter<string>();

  constructor(private usuariosService: UsuariosService) { }





  mandarEmail() {

    
  }





  ngOnInit() {

    this.usuariosService.mostrarUsuarios()
      .subscribe(res => {
        const usuarios = res as Usuario[]
        const usuariosFiltrados = usuarios.filter((usuario: Usuario) => usuario._id === this.idDelPadre);
        const logeado = usuariosFiltrados.length > 0;

        if(logeado) {
          this.enviarEmail.emit(usuariosFiltrados[0].email);
        }
        
      });
    console.log(this.idDelPadre)
      
  }

}
