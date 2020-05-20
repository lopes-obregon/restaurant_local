const express = require('express');
const routes = express.Router();
const UsersController = require('./controllers/UsersController');
const PedidosController = require('./controllers/PedidosController');
const ProdutosController = require('./controllers/ProdutosController');
const SessionCOntroller = require('./controllers/SessionController');
//rotas usuraio
routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);
//rotas mesa e funcionarios
routes.post('/pedidoss', PedidosController.create);
routes.get('/pedidoss', PedidosController.index);
routes.delete('/pedidoss/:mesa', PedidosController.delete);
routes.get('/pedidoss/:mesa', PedidosController.entreguePedido);
routes.post('/pedidoss/:mesa', PedidosController.printPedidoEntregue);
//rotas dos produtos e calculos dos produtos
routes.get('/produtos', ProdutosController.obtemProdutos);//faz as consultas no banco e retorna os produtos
routes.post('/produtos', ProdutosController.calcProduto);
//sessão de login da mesa o dono e dos funcionarios
routes.post('/sessions', SessionCOntroller.create);

module.exports = routes;