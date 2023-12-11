export class CarritoItem {
    nombre: string = "";
    precio: number = 0;
    cantidad: number = 0;
  }
  
  export class Carrito {
    idUsuario: string = "";
    items: Array<CarritoItem> = [];
    fechaCompra: string = new Date().toLocaleDateString(); // local
    totalCompra: number = 0;
  }

/*export class Carrito {

    idUsuario : string = "";
    listaProductos : Array<string> =[];
    fechaCompra : string = new Date().toLocaleDateString(); // local
    totalCompra : number = 0;



}*/