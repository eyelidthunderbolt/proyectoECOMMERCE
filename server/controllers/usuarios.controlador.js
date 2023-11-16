const controladorUsuario = {};
const { request } = require('express');
const usuarios = require('../models/usuarios');
const usuariosModels = require('../models/usuarios');

controladorUsuario.crearUsuario = async (req, res, next) => {
    const nuevoUsuario = new usuariosModels(req.body);
    await nuevoUsuario.save();
}

controladorUsuario.mostrarUsuario = async (req, res, next) => {
    const buscarUsuario = new usuariosModels(req.body);
    res.json(buscarUsuario)
}

module.exports = controladorUsuario;