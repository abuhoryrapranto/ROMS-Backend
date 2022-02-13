const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config()
const port = process.env.PORT || 5000
const { auth } = require('./middlewares/auth')
const authRoutes = require('./routes/auth')
const menuRoutes = require('./routes/menu')
const categoryRoutes = require('./routes/category')
const userRoutes = require('./routes/user')

app.use(function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.use('/api', authRoutes);
app.use('/api', auth, menuRoutes);
app.use('/api', auth, categoryRoutes);
app.use('/api', auth, userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})