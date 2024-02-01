const express = require('express');
const path = require('path');
require('dotenv').config();
const routers = require('./routers/index');

const app = express();

const PORT = process.env.PORT;
const NAMEAPI = process.env.NAMEAPI;
const VERSION = process.env.VERSION;

app.use(routers)

app.listen(process.env.PORT,()=>{
    console.log(`${NAMEAPI} V-${VERSION} iniciada en el puerto ${PORT}`);
});