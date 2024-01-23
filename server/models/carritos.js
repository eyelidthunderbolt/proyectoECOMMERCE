const mongoose = require('mongoose')
const { Schema } = mongoose;
const carritosEsquema = new Schema({

    idUsuario: String,
  items: [
    {
      idProducto: String,
      nombre: String,
      precio: Number,
      cantidad: Number
    }
  ],
  fechaCompra: String,
  totalCompra: Number

    /*idUsuario:{type: String, required: true},
    listaProductos:{type: [String],required:true},
    fechaCompra:{type: String, required:true},
    totalCompra:{type: Number, required:true}*/


});

module.exports = mongoose.model('Carritos', carritosEsquema);