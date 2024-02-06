const express = require('express');
const router = express.Router();

router.get('/list',(req,res)=>{
    res.send('lista de usuarios');
});

router.post('/add',(req,res)=>{
    res.send('nuevo usuario agregado');
});

router.put('/edit',(req,res)=>{
    res.send('usuario editado');
});

module.exports = router;
