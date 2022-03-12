const express = require('express')
const app = express()
var v1Router = express.Router()
var userController = require('../controllers/UserController')

v1Router.get('/infos', userController.getUserInfos)
v1Router.get('/logout', userController.logout);

const v1UserRoutes = app.use(v1Router);

module.exports = v1UserRoutes