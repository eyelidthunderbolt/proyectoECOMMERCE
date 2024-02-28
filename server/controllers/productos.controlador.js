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
        precio: req.body.precio,
        stock: req.body.stock


    };

    await productosModels.findByIdAndUpdate(id, { $set: productoAEditar }, {new:true});
    res.json('PRODUCTO ACTUALIZADO')

}



controladorProducto.borrarProducto = async (req,res) => {
    await productos.findByIdAndDelete(req.params.id);
    res.json('Producto Eliminado')
}

controladorProducto.comprobarStock = async (req, res) => {
    const { id, cantidad } = req.params;
    console.log("+++++", id, cantidad, req.params);


    try {
        const producto = await productosModels.findById(id);

        if (!producto) {
            return res.status(404).json({ status: 404, message: 'Producto no encontrado' });
        }

        if (producto.stock < cantidad) {
            return res.status(400).json({ status: 400, message: 'No hay suficiente stock para realizar la operación' });
        }
        else{

            res.json({ status: 200, message: 'Stock suficiente' });
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, message: 'Error interno del servidor' });
    }
};

controladorProducto.actualizarStock = async (req, res) => {
    const { id, cantidad } = req.params;



    try {
        const producto = await productosModels.findById(id);

        if (!producto) {
            return res.status(404).json({ status: 404, message: 'Producto no encontrado' });
        }

        if (producto.stock < cantidad) {
            return res.status(400).json({ status: 400, message: 'No hay suficiente stock para realizar la operación' });
        }
        else{
            producto.stock -= cantidad;
            await producto.save();
        }

        res.json({ status: 200, message: 'Stock actualizado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, message: 'Error interno del servidor' });
    }
};




// controladorProducto.guardarImagen =  (req,res) => {
//     console.log("++++++++++++++++++++++++++++++++++++++++++++++ aki", req.files, req.body.fileName);
//     fs.writeFileSync(path.resolve(`../../frontend/src/imagenes/${req.body.fileName}`), req.files);
//     console.log("+++++++++ sus huevos");
// }


module.exports = controladorProducto;