import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../../models/usuario';
import { DataService } from '../../services/data.service';
import { Carrito } from 'src/app/models/carrito';
import { CarritosService } from 'src/app/services/carritos.service';

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
  passwordUsuario: string = "";
  idUsuario: string | null = null;
  nombreUsuario: string | null = null;
  adminLogeado: boolean = false;
  pedidos : Carrito[] = [];
  nCompras : number = 0;




  constructor(public usuariosService: UsuariosService, private router: Router, private dataService: DataService, private carritoService: CarritosService) {

    // this.usuario = new Usuario
    // this.usuarios = [];


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


        this.comprobarAdmin(this.idUsuario);
        this.comprobarCompras();



        this.emailUsuario = "";
        this.passwordUsuario = "";

      });

  }

  navegarARegistro() {

    this.router.navigate(['/registro']);

  }

  navegarAAdmin() {
    this.router.navigate(['/admin']);
  }

  navegarAHistorial() {



    if (this.idUsuario != null) {


      this.compartirID(this.idUsuario)
      this.router.navigate(['/misCompras']);

    }

    else {
      M.toast({ html: "Usuario no logeado" })
    }

  }

  comprobarAdmin(idUsuario: string | null) {
    if (idUsuario == "65775637dff5a89887c18915" || idUsuario == "657ee96e32525ff095667118" || idUsuario == "659edc5eba2b17b6693e2397") {

      this.adminLogeado = true;

    } else {
      this.adminLogeado = false;
    }
  }

  logout(){
    sessionStorage.clear()

    this.idUsuario = null
    this.adminLogeado = false
    this.nombreUsuario = null
    this.mensajeBienvenida = "";
    this.router.navigate([''])

  }

  comprobarCompras(){

    this.carritoService.mostrarCarritos()
      .subscribe(res => {
        const carritos = res as Carrito[];

        const carritosFiltrados = carritos.filter((carrito: Carrito) => carrito.idUsuario === this.idUsuario);
        const encontrado = carritosFiltrados.length > 0;

        if(encontrado){

          this.pedidos = carritosFiltrados;

          for (let index = 0; index < this.pedidos.length; index++) {

            this.nCompras++


          }

          if(this.nCompras >2){
            M.toast({ html: "Usted no puede hacer mas compras" })
            this.logout()

          }







        }



      });

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let nombreU: string | null = sessionStorage.getItem('nombreUsuario');
    this.nombreUsuario = nombreU;
    this.idUsuario = sessionStorage.getItem('token');
    this.comprobarAdmin(this.idUsuario)
    this.comprobarCompras()




    if (this.nombreUsuario != null) {

      this.mensajeBienvenida = "Bienvenido " + this.nombreUsuario;

    }

  }
}
