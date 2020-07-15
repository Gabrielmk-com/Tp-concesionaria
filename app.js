const express = require('express');
const app = express();


//<---rutas requeridas---->
const rutaAutos =require ('./routes/autos');
const rutaHome = require ('./routes/home');
const rutaMarcas= require('./routes/marcas');
const rutaSucursales = require('./routes/sucursales');

app.listen(3030, ()=> console.log('El servidor esta funcionando en el puerto 3030'))

app.use('/',rutaHome);
app.use('/autos', rutaAuto);
app.use('/marcas', rutaMarcas);
app.use('/sucursales', rutaSucursales);