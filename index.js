const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');



console.log(process.env)


//Crear  el servidor de express
const app = express();


// Base de datos
dbConnection();


//CORS para permitir peticiones de otros dominios
app.use(cors())

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