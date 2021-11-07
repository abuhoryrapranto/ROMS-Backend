const express = require('express')
const app = express()
var v1Router = express.Router()
var menuController = require('../controllers/MenuController')

v1Router.post('/save', menuController.saveMenu)

const v1MenuRoutes = app.use('/v1/menu', v1Router);

module.exports = v1MenuRoutes