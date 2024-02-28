import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-etiqueta-precio',
  templateUrl: './etiqueta-precio.component.html',
  styleUrls: ['./etiqueta-precio.component.css']
})
export class EtiquetaPrecioComponent {
  @Input()  precioCentimo : number = 0;

  public precioEnEuros(cantidadCentimos: number) {
    const cantidadEuros = Number(cantidadCentimos) / 100;
    const formateador = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    });
    const precioFormateado = formateador.format(cantidadEuros);
    return precioFormateado;
  }
}
