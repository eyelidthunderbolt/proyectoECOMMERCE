const express = require('express');
const router = express.Router();
const {crearUsuario} = require('../controllers/usuarios.controlador');
const usuarioControl = require('../controllers/usuarios.controlador');

router.post('/',usuarioControl.crearUsuario);
router.get('/:id', usuarioControl.mostrarUsuario);

module.exports = router;