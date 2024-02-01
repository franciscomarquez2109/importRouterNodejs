const express = require('express');

const router = express.Router();

router.get('/router2/get',(req,res)=>{
    res.send('Peticion al router 2');
});

module.exports = router;