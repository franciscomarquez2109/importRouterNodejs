const express = require('express');

const router = express.Router();

router.get('/router1/get',(req,res)=>{
    res.send('Peticion al router 1');
});

module.exports = router;
