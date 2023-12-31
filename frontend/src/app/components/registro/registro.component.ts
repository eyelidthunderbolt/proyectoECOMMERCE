import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var M : any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


  constructor(public usuarioService: UsuariosService){

  }
  altaUsuario(usuarioForm : NgForm){

    if(usuarioForm.value.nombre == "" || usuarioForm.value.email == "" ||  usuarioForm.value.password == "" || usuarioForm.value.direccion == "" || usuarioForm.value.fechaN == ""){
      M.toast({html:"Faltan campos requeridos"})
    }
    else{

      usuarioForm.value._id = null;
    this.usuarioService.crearUsuario(usuarioForm.value)
    .subscribe(res =>{

      console.log(res);
      M.toast({html:"Usuario Registrado"})
      this.resetForm(usuarioForm);


    })


    }


  }

  resetForm(form?:NgForm){

    if(form){
      form.reset();
      this.usuarioService.usuarioSeleccionado = new Usuario();
    }

  }

}
