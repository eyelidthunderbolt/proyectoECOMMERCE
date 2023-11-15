const controladorProducto = {};
const { request } = require('express');
const productos = require('../models/productos');
const productosModels = require('../models/productos');

controladorProducto.mostrarProductos = async (req,res) => {
    const leerProductos = await productosModels.find();
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

controladorProducto.editarProducto = async (req,res) => {
    const { id } = req.params;
    const productoAEditar = {
        
        //Definir campos del producto
    };

    await productosModels.findByIdAndUpdate(id,{ $set: productoAEditar }, {new:true});
    res.json('Producto Actualizado');

    controladorProducto.borrarProducto = async (req,res) => {
        await productos.findByIdAndDelete(req.params.id);
        res.json('Producto Eliminado')
    }
}
module.exports = controladorProducto;