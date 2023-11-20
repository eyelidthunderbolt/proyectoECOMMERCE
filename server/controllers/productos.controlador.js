const controladorCarrito = {};
const { request } = require('express');
const carritos = require('../models/carritos');
const carritosModels = require('../models/carritos');

controladorCarrito.mostrarCarritos = async (req,res) => {
    const leerCarritos = await carritosModels.find();
    res.json(leerCarritos);
}

controladorProducto.crearProducto = async (req,res) => {
    const nuevoProducto = new productosModels(req.body);
    await nuevoProducto.save();

    res.json("Carrito Almacenado");
}

controladorProducto.mostrarCarrito = async (req,res) => {

    const buscarCarrito = await carritosModels.findById(req.params.id);
    res.json(buscarCarrito)
}



controladorCarrito.borrarCarrito = async (req,res) => {
    await productos.findByIdAndDelete(req.params.id);
    res.json('Carrito Eliminado')
}

module.exports = controladorProducto;