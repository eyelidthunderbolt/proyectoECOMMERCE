import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {

  constructor(private router : Router){}

  navegarAltas(){

    this.router.navigate(['/altaProductos'])

  }

  navegarModificaciones(){

    this.router.navigate(['/modificarProductos'])
  }

}
