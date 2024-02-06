const express = require('express');
const jwt = require('../../auth/jwt');
const router = express.Router();

let users = {
    userName: 'fmarquez',
    pass: 1234
}

router.post('/sign',(req,res)=>{
    let user = req.query.userName;
    let pass = req.query.pass;

    if (user == users.userName && pass == users.pass) {
        let token = jwt.signToken({userName:users.userName}); 
        res.setHeader('Authorization', 'Bearer '+token);
        res.send('datos validados correctamentes');
    }else{
        res.send('datos incorrectos');
    }
   
});

module.exports = router;