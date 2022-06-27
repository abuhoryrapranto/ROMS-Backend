const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var cookieParser = require('cookie-parser');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config()
const port = process.env.PORT || 5001
const { auth } = require('./app/middlewares/auth')
const authRoutes = require('./app/routes/auth')
const menuRoutes = require('./app/routes/menu')
const categoryRoutes = require('./app/routes/category')
const userRoutes = require('./app/routes/user')
const orderRoutes = require('./app/routes/order')
const cashBoxRoutes = require('./app/routes/cashbox')

app.use(cors());
app.use(cookieParser());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/orders', auth, orderRoutes);
app.use('/api/v1/cash-boxes', cashBoxRoutes);
app.use('/api/v1/menus', auth, menuRoutes);
app.use('/api/v1/categories', auth, categoryRoutes);
app.use('/api/v1/user', auth, userRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})