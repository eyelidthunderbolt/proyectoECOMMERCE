export class Carrito {

    idUsuario : string = "";
    listaProductos : Array<string> =[];
    fechaCompra : string = new Date().toLocaleDateString(); // local
    totalCompra : number = 0;



}