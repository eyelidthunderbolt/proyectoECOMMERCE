const mongoose = require('mongoose')
const { Schema } = mongoose;
const usuariosEsquema = new Schema({

    nombre: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    direccion : {type: String, required: true},
    fechaN : {type: String, required: true}
});

module.exports = mongoose.model('Usuarios', usuariosEsquema)
