import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../models/usuario';
import { DataService } from '../../services/data.service';

declare var M: any;

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {

  // usuario : Usuario;
  // usuarios : Usuario[]
  mensajeBienvenida: string = "";
  emailUsuario: string = "";
  passwordUsuario : string = "";
  idUsuario: string | null = null;
  nombreUsuario: string | null = null;
  adminLogeado: boolean = false;



  constructor(public usuariosService: UsuariosService, private router: Router, private dataService: DataService) {

    // this.usuario = new Usuario
    // this.usuarios = [];


  }

  updateVisibilidad() {
    this.dataService.updateVisibilidad(false)
  }

  compartirID(idUsuario: string) {

    this.dataService.compartirUsuario(idUsuario);

  }

  login(email: string, password: string) {
    sessionStorage.clear();

    this.usuariosService.mostrarUsuarios()
      .subscribe(res => {
        const usuarios = res as Usuario[];

        const usuariosFiltrados = usuarios.filter((usuario: Usuario) => usuario.email === email && usuario.password === password);
        const logeado = usuariosFiltrados.length > 0;

        if (logeado) {

          sessionStorage.setItem('nombreUsuario', usuariosFiltrados[0].nombre)
          sessionStorage.setItem('token', usuariosFiltrados[0]._id.toString());
          sessionStorage.setItem('emailUsuario', JSON.stringify(usuariosFiltrados[0].email));
          M.toast({ html: "Usuario Logeado con éxito" })
          this.nombreUsuario = usuariosFiltrados[0].nombre;
          this.mensajeBienvenida = "Bienvenido " + this.nombreUsuario;

          let token: string | null = sessionStorage.getItem('token');
          this.idUsuario = token;
          
          

        }

        else {
          this.mensajeBienvenida = "Email o contraseña incorrectos"
        }

        
        if (this.idUsuario == "65775637dff5a89887c18915") {

          this.adminLogeado = true;

        }

        else {
          this.adminLogeado = false;
        }
        this.emailUsuario = "";
        this.passwordUsuario = "";

      });

  }

  navegarARegistro() {

    this.router.navigate(['/registro']);
    this.updateVisibilidad();
  }

  navegarAHistorial() {



    if (this.idUsuario != null) {


      this.compartirID(this.idUsuario)
      this.router.navigate(['/misCompras']);
      this.updateVisibilidad();
    }

    else {
      M.toast({ html: "Usuario no logeado" })
    }

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let nombreU: string | null = sessionStorage.getItem('nombreUsuario');
    this.nombreUsuario = nombreU;
    this.idUsuario = sessionStorage.getItem('token');



    if (this.nombreUsuario != null) {

      this.mensajeBienvenida = "Bienvenido " + this.nombreUsuario;

    }

  }
}
