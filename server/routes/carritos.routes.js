const express = require('express');
const router = express.Router();
const {crearCarrito} = require('../controllers/carritos.controlador');
const carritoControl = require('../controllers/carritos.controlador');

router.get('/:id', carritoControl.mostrarCarrito);
router.get('/',carritoControl.mostrarCarritos)
router.post('/',carritoControl.crearCarrito);
router.delete('/:id', carritoControl.borrarCarrito)


module.exports = router;