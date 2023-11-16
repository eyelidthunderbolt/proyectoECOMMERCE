import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {

  email="";
  password="";
  token=""

  constructor(public usuariosService: UsuariosService, public router: Router){}

  login(usuario : string, password : string){


  }

}
