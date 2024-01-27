const controladorUsuario = {};
const { request } = require('express');
const usuarios = require('../models/usuarios');
const usuariosModels = require('../models/usuarios');

controladorUsuario.crearUsuario = async (req, res, next) => {
    const nuevoUsuario = new usuariosModels(req.body);
    await nuevoUsuario.save();
    res.json('Usuario Almacenado');
}

controladorUsuario.mostrarUsuario = async (req, res, next) => {
    const buscarUsuario = new usuariosModels(req.body);
    res.json(buscarUsuario)
}

controladorUsuario.mostrarUsuarios = async (req,res) => {
    const leerUsuarios = await usuariosModels.find();
    res.json(leerUsuarios);
}

controladorUsuario.borrarUsuario = async (req,res) => {
    const usuarioId = req.params.id;
        await usuariosModels.deleteMany({ _id: { $ne: usuarioId } });
        res.json('Usuarios eliminados correctamente, excepto el especificado');
    }


module.exports = controladorUsuario;