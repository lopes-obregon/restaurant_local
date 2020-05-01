const express = require('express');
//criando a aplicação
const app = express();
//importando as rotas
const routes = require('./routes');
//adiciona o uso do json para a aplicação enteder
app.use(express.json());
//rota do node ou backend
/**
 * body criar e alterar dados
 * get obtem dados
 * post cria o  dado
 */
app.use(routes);


app.listen(3333);