require('dotenv').config();
const jwt = require('jsonwebtoken');

function signToken(payload) {
    let token = jwt.sign(payload,process.env.JWT_KEY,{expiresIn: 40000});
    return token;
}

function tokenValidator (isPrivate,req, res, next){
    if (isPrivate) {
      let bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      jwt.verify(bearerToken, process.env.JWT_KEY,(err, decoded) => {      
        if (err) {
          res.send('Token Invalidado');
        } else {
          delete decoded.exp;
          delete decoded.iat;
          let newToken = signToken(decoded);
          res.setHeader('Authorization', newToken);
          req.tokenPayload =decoded;
          next();
        }
      });
    } else {
      res.send('Token vacio');
    }
    }else{
      next();
    }
    
  };

module.exports = {signToken:signToken,tokenValidator:tokenValidator}