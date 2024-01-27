import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-chijo',
  templateUrl: './chijo.component.html',
  styleUrls: ['./chijo.component.css']
})
export class CHijoComponent {

  @Input() compras : number = 0;
  @Output() eventoCompras = new EventEmitter<string>();
  public mensaje : string =""


  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (this.compras >0){
      this.mensaje = "El usuario ha hecho" + this.compras + "compras"
      this.eventoCompras.emit(this.mensaje)
    }

    else{
      this.mensaje = "El usuario no ha hecho compras"
      this.eventoCompras.emit(this.mensaje)
    }

  }



}
