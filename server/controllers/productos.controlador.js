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

controladorProducto.editarProducto = async (req,res) => {

    const { id } = req.params; //esto si o si ya que va a indicar que los parametros se van a necesitar obligatoriamente
    const productoAEditar = {

        foto: req.body.foto,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        precio: req.body.precio


    };

    await productosModels.findByIdAndUpdate(id, { $set: productoAEditar }, {new:true});
    res.json('PRODUCTO ACTUALIZADO')

}



controladorProducto.borrarProducto = async (req,res) => {
    await productos.findByIdAndDelete(req.params.id);
    res.json('Producto Eliminado')
}

// controladorProducto.guardarImagen =  (req,res) => {
//     console.log("++++++++++++++++++++++++++++++++++++++++++++++ aki", req.files, req.body.fileName);
//     fs.writeFileSync(path.resolve(`../../frontend/src/imagenes/${req.body.fileName}`), req.files);
//     console.log("+++++++++ sus huevos");
// }


module.exports = controladorProducto;