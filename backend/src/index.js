const express = require('express');
const cors = require('cors');
//criando a aplicação
const app = express();
//importando as rotas
const routes = require('./routes');

//adiciona o uso do json para a aplicação enteder
app.use(express.json());
app.use((req, res, next) =>{
    //console.log("Acessou o middle");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, X-Custom-Header ,Accept");
    app.use(cors());
    next();    
});
app.use(routes);


app.listen(3333);

//rota do node ou backend
/**
 * body criar e alterar dados
 * get obtem dados
 * post cria o  dado
 */