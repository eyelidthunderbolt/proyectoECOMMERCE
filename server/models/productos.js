const mongoose = require('mongoose')
const { Schema } = mongoose;
const productosEsquema = new Schema({

    foto: {type: String, required: true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    categoria: {type: String, required: true},
    precio: {type: String, required: true},
    cantidad: {type: Number},
    stock: {type: Number}
});

module.exports = mongoose.model('Productos', productosEsquema);