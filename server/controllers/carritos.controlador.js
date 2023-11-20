const controladorCarrito = {};
const { request } = require('express');
const Carritos = require('../models/Carritos');
const CarritosModels = require('../models/Carritos');

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

controladorCarrito.editarCarrito = async (req,res) => {
    const { id } = req.params;
    const CarritoAEditar = {

        //Definir campos del Carrito
    };

    await CarritosModels.findByIdAndUpdate(id,{ $set: CarritoAEditar }, {new:true});
    res.json('Carrito Actualizado');
}

controladorCarrito.borrarCarrito = async (req,res) => {
    await Carritos.findByIdAndDelete(req.params.id);
    res.json('Carrito Eliminado')
}

module.exports = controladorCarrito;