var jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.status(404).send({'message': "Token not found"});
    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) 
          return res.status(401).send({'status': 401, 'message': 'Unauthorized'});
        next();
    });
}

module.exports = {
    auth : auth
}