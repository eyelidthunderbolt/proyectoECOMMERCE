const controladorProducto = {};
const { request } = require('express');
const productos = require('../models/productos');
const productosModels = require('../models/productos');

controladorProducto.mostrarProductos = async (req,res) => {
    const leerProductos = await productos.find();
    res.json(leerProductos);
}

controladorProducto.crearProducto = async (req,res) => {
    const nuevoProducto = new productosModels(req.body);
    await nuevoProducto.save();

    res.json("Producto Almacenado");
}

controladorProducto.mostrarProducto = async (req,res) => {

    const buscarProducto = await productosModels.findById(req.params.id);
    res.json(buscarProducto)
}



controladorProducto.borrarProducto = async (req,res) => {
    await productos.findByIdAndDelete(req.params.id);
    res.json('Producto Eliminado')
}

module.exports = controladorProducto;