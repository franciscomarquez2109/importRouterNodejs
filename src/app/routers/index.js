const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router()
const jwt = require('../auth/jwt');
const folderName = fs.readdirSync(__dirname).filter(fileName => fileName != 'index.js');

folderName.forEach(folder =>{
    const configUtf8 = fs.readFileSync(path.join(__dirname,folder,'router.conf'),'utf8');
    const configRouter = JSON.parse(configUtf8);
    const routePath = path.join(__dirname,folder,'router.js');
    const route = require(routePath);

    router.use(
        configRouter.parentRouter,
        (req,res,next)=>jwt.tokenValidator(configRouter.isPrivate,req,res,next),
        route
    );
});

//simulacion de algun metodo de autenticacion
function validatorAuth(private,req,res,next){
    private ? res.status(403).send('Acceso denegado') : next()
}

module.exports = router;