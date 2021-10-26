const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

// importacion de rutas
const indiceRutas = require('./rutas/index')

// configuraciones 
app.set('puerto',process.env.PORT || 3000)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

// middleware: para entender los datos en tipo json
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// rutas
app.use('/', indiceRutas)

// archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// Iniciar el servidor
app.listen(app.get('puerto'),()=>{
    console.log(`Servidor en puerto ${app.get('puerto')}`)
})