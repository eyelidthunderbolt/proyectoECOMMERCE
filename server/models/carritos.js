const mongoose = require('mongoose')
const { Schema } = mongoose;
const carritosEsquema = new Schema({

    idUsuario:{type: String, required: true},
    listaProductos:{type: [String],required:true},
    fechaCompra:{type: Date, required:true},
    totalCompra:{type: Number, required:true}


});

module.exports = mongoose.model('Carritos', carritosEsquema);