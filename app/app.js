const express = require('express');
const app = express();
const router = require('./routes/joyasRoute');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Manejo de errores
app.use('/joyas', router);







module.exports = app;