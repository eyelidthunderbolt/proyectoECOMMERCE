const exrpress = require('express');
const router = express.Router();
const { mostrarProductos, crearProductos } = require('../controllers/productos.controlador')
const prodControl = require('../controllers/productos.controlador')

router.get('/', prodControl.mostrarProductos);
router.post('/', prodControl.crearProducto);
router.get('/:id', prodControl.mostrarProducto);
router.put('/:id', prodControl.editarProducto);
router.delete('/:id', prodControl.borrarProducto);

module.exports = router;