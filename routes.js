const express = require('express');
const routes = express.Router()

const carroController = require('./controllers/carroController')
const usuarioController = require('./controllers/usuarioController')
const login = require("./middleware/login")

routes.get('/carros', carroController.index)
      .post('/carros', login, carroController.store);
      
routes.get('/usuarios', usuarioController.index)
      .post('/usuarios', usuarioController.store)
      .post('/login', usuarioController.login);
  
module.exports = routes;