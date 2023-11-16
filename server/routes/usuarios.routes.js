const express = require('express');
const router = express.Router();
const {crearUsuario} = require('../controllers/usuarios.controlador');
const usuarioControl = require('../controllers/usuarios.controlador');

router.get('/:id', usuarioControl.mostrarUsuario);
router.get('/',usuarioControl.mostrarUsuarios)
router.post('/',usuarioControl.crearUsuario);


module.exports = router;