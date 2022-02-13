const express = require('express')
const app = express()
var v1Router = express.Router()
var userController = require('../controllers/UserController')

v1Router.get('/infos', userController.getUserInfos)

const v1UserRoutes = app.use('/v1/user', v1Router);

module.exports = v1UserRoutes