import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({ providedIn: 'root' })

export class UsuariosService {
  usuarioSeleccionado: Usuario;
  usuarios: Usuario[]; // array para almacenar los usuarios que vamos obteniendo
  readonly URL = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {
    this.usuarioSeleccionado = new Usuario();
    this.usuarios = [];
  }

  mostrarUsuarios() {
    return this.http.get(this.URL); // devuelve todos los usuarios en array
  }

  crearUsuario(usuario: Usuario) {
    return this.http.post(this.URL, usuario);
  }
}
