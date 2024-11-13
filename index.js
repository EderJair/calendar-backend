const express = require('express');
require('dotenv').config();


console.log(process.env)


//Crear  el servidor de express
const app = express();


// Directorio publico
// mideleware: es una instruccion que se ejecuta siempre que se levanta el servidor
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());


//rutas
app.use('/api/auth', require('./routes/auth'));


// excuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})