const express = require('express')
const app = express()
var router = express.Router()
var authController = require('../controllers/AuthController')

const v1Router = router.post('/register', authController.register)

const v1AuthRoutes = app.use('/v1/auth', v1Router);

module.exports = v1AuthRoutes