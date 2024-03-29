const express = require('express'); //llamamos al modulo express para poder trabajar con el
const app = express(); //crea una instancia de express llamado app
const morgan = require('morgan');
const {mongoose} = require('./database.js')
// const fileUpload = require('express-fileupload')
const cors = require('cors');

//  Settings

app.set('port', process.env.PORT || 3000); //setear el puerto , si no se puede usar el proporcionado por defecto intentara usar el 3000
app.listen (app.get('port'), () => { // indica que va a estar a la escucha usando app en el puerto 'port' definido

    console.log('Servidor corriendo en el puerto', app.get('port')); // una respuesta simple

});




// Middleware

app.use(morgan('dev')); // indica que usamos morgan
app.use(express.json()); // indica que usamos express
// app.use(fileUpload()); // indica que usamos fileupload
app.use(cors({origin:'*'})); // indica que usamos el cors con origen todos





// Routes

app.use(require('./routes/productos.routes.js')) // con esto usamos la ruta que acabamos de crear
app.use('/api/productos', require('./routes/productos.routes.js')) // usa empleados y requiere las rutas
app.use(require('./routes/usuarios.routes.js'))
app.use('/api/usuarios', require('./routes/usuarios.routes.js'))
app.use(require('./routes/carritos.routes.js'))
app.use('/api/carritos', require('./routes/carritos.routes.js'))
// Inicializar el servidor


