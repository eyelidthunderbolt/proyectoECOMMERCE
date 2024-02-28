const express = require('express');
const fs = require('fs')
const router = express.Router();
const { mostrarProductos, crearProductos } = require('../controllers/productos.controlador')
const prodControl = require('../controllers/productos.controlador')

router.get('/', prodControl.mostrarProductos);
router.post('/', prodControl.crearProducto);
router.get('/:id', prodControl.mostrarProducto);
router.put('/:id', prodControl.editarProducto);
router.delete('/:id', prodControl.borrarProducto);
router.put('/:id/:cantidad', prodControl.actualizarStock);
router.get('/comprobar/:id/:cantidad', prodControl.comprobarStock);
// router.post('/subir-imagen', prodControl.guardarImagen);

const multer  = require('multer');
const path = require('path')
const upload = multer({ dest: path.join('.') });

router.post('/subir-imagen', upload.single('file'), function(req, res) {
  const filename = req.body.fileName;
  const file = req.file;

  console.log("++++++++");
  console.log(filename);
  console.log(file);

  var tmp_path = req.file.path;


  var target_path = path.join(__dirname, '..', '..', 'frontend', 'src', 'assets', filename);
  console.log(target_path);


  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);
  src.on('end', function() { console.log('BIEN') });
  src.on('error', function(err) { console.log('MAL') });

  res.send(200);
});

module.exports = router;