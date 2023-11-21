const mongoose = require('mongoose')
const { Schema } = mongoose;
const carritosEsquema = new Schema({

    emailUsuario:{type: String},
    listaProductos:{type: [String],required:true},
    fechaCompra:{type: Date, required:true}


});

module.exports = mongoose.model('Carritos', carritosEsquema);