const express = require('express'); //llamamos al modulo express para poder trabajar con el
const app = express(); //crea una instancia de express llamado app
const morgan = require('morgan');
const {mongoose} = require('./database.js')
const cors = require('cors');
//  Settings

app.set('port', process.env.PORT || 3000); //setear el puerto , si no se puede usar el proporcionado por defecto intentara usar el 3000
app.listen (app.get('port'), () => { // indica que va a estar a la escucha usando app en el puerto 'port' definido

    console.log('Servidor corriendo en el puerto', app.get('port')); // una respuesta simple

});




// Middleware

app.use(morgan('dev')); // indica que usamos morgan
app.use(express.json()); // indica que usamos express
app.use(cors({origin:'*'})); // indica que usamos el cors con origen todos




// Routes

app.use(require('./routes/empleados.routes.js')) // con esto usamos la ruta que acabamos de crear
app.use('/api/empleados', require('./routes/empleados.routes.js')) // usa empleados y requiere las rutas
// Inicializar el servidor


