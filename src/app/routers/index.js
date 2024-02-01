const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router()

const folderName = fs.readdirSync(__dirname).filter(fileName => fileName != 'index.js');

folderName.forEach(folder =>{
    const routePath = path.join(__dirname,folder,'router.js');
    const route = require(routePath);
    router.use(route);
});

module.exports = router;