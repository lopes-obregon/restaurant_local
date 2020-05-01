const connect = require('../databse/connect');
module.exports = {
    async obtemProdutos(request, response){
        //faz a consulta dos produtos
        await connect.query("SELECT * FROM produtos", function(err, row){
            if(err) throw err;
            console.log(row);
            return response.json(row);
        });
        
        
    },
    async calcProduto(request, response){
        const {nomeProdutoDb, valorProdutoDb, nomeProdutoCliente, quantidadeProduto} = request.body;
        //cria o dicionario para armazenar os valores 
        let dic = new Map();//dicionario do banco
        let dic2 = new Map();//dicionario dos produtos do cliente
        insereDados(nomeProdutoDb, valorProdutoDb, dic);
        insereDados(nomeProdutoCliente, quantidadeProduto, dic2);
        //variavel para guardar os resultados
        let resultado = 0;
        for(var[nomeProduto, valor] of dic){
            for(var [produto, quantidade] of dic2){
                if(nomeProduto == produto){
                    resultado = resultado +  valor*parseInt(quantidade, 10);
                }
            }
        }
        let mensaguem = "Valor Total: " + resultado;
        return response.json({msg:mensaguem});
    }
}
//função que insere os dados no dicionario;
function insereDados(vectorKey,vectorValue, dicc){
    for(let i in vectorKey){
        dicc.set(vectorKey[i], vectorValue[i]);
    }
}