var jwt = require('jsonwebtoken');

function auth(req, res, next) {

    const authHeader = req.headers['authorization'];

    const token = req.cookies.token;

    const userToken = authHeader && authHeader.split(' ')[1];

    if(userToken == null) return res.status(404).send({'status': 404, 'message': "Token not found"});

    if(token == null) return res.status(401).send({'status': 401, 'message': "Unauthorized"});

    if(userToken != token) return res.status(401).send({'status': 401, 'message': 'Unauthorized'});

    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {

        if (err) {

            return res.status(401).send({'status': 401, 'message': 'Unauthorized'});
        }

        req.userId = decoded.id;

        next();
    }); 
}

module.exports = {
    auth : auth
}