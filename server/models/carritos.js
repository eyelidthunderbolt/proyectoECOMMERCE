const mongoose = require('mongoose')
const { Schema } = mongoose;
const carritosEsquema = new Schema({

    emailUsuario:{type: String,required: true},
    listaProductos:{type: [String],required:true},
    fechaCompra:{type: Date, required:true}

    
});