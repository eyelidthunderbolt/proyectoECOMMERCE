import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-chijo',
  templateUrl: './chijo.component.html',
  styleUrls: ['./chijo.component.css']
})
export class CHijoComponent {

  @Input() idUsuarioEnHijo: string | null = ""
  @Output() eventoMensaje = new EventEmitter<string>();

  constructor(private usuariosService: UsuariosService) {


  }

  borrarUsuarios(idUsuario: string | null) {
    console.log("++++IDUSUARIOHIJO" + this.idUsuarioEnHijo)

    this.usuariosService.mostrarUsuarios()
      .subscribe(res => {
        const usuarios = res as Usuario[];

        const usuariosFiltrados = usuarios.filter((usuario: Usuario) => usuario._id === idUsuario);
        const encontrado = usuariosFiltrados.length > 0;

        if (encontrado) {



            const borrado = this.usuariosService.borrarUsuario(idUsuario)
            .subscribe(res =>{
              console.log(res)
            })

            if(borrado){
              this.eventoMensaje.emit("Usuarios Eliminados")
            }






        }

      })





  }

}
