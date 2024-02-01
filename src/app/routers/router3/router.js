const express = require('express');

const router = express.Router();

router.get('/router3/get',(req,res)=>{
    res.send('Peticion al router 3');
});

module.exports = router;