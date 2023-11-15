const mongoose = require('mongoose'); // indica que requiere mongoose para trabajar
const URI = 'mongodb://127.0.0.1:27017/proyecto-mean'; // indicamos la uri en donde se va a almacenar la base de datos

mongoose.connect(URI) // indicamos que conectamos mongoose a la URI
    .then(db => console.log('Base de datos conectada')) // cuando se haga eso muestra una respuesta
    .catch(err => console.log(err)); // catch para un error


module.exports = mongoose; // exporta el mondulo mongoose