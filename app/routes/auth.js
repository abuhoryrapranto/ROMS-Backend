const express = require('express')
const app = express()
var v1Router = express.Router()
var authController = require('../controllers/AuthController')

v1Router.post('/register', authController.register);
v1Router.post('/login', authController.login);

const v1AuthRoutes = app.use('/v1/auth', v1Router);

module.exports = v1AuthRoutes