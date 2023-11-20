const controladorCarrito = {};
const { request } = require('express');
const Carritos = require('../models/carritos');
const CarritosModels = require('../models/carritos');

controladorCarrito.mostrarCarritos = async (req,res) => {
    const leerCarritos = await CarritosModels.find();
    res.json(leerCarritos);
}

controladorCarrito.crearCarrito = async (req,res) => {
    const nuevoCarrito = new CarritosModels(req.body);
    await nuevoCarrito.save();

    res.json("Carrito Almacenado");
}

controladorCarrito.mostrarCarrito = async (req,res) => {

    const buscarCarrito = await CarritosModels.findById(req.params.id);
    res.json(buscarCarrito)
}



controladorCarrito.borrarCarrito = async (req,res) => {
    await Carritos.findByIdAndDelete(req.params.id);
    res.json('Carrito Eliminado')
}

module.exports = controladorCarrito;