const connect = require('../databse/connect');
module.exports = {
    //insere os produtos
    async index(request, response){
        const {nomeProduto, valorProduto} = request.body;
        console.log(`nome produto: ${nomeProduto}, valor: ${valorProduto}`);
        let aux  = Number(valorProduto)
        let sql = `INSERT INTO produtos (nomeProduto, valor) VALUES ('${nomeProduto}', ${aux})`;
        let res;
        await connect.query(sql, function(error, response){
            if (error) throw console.log(error);
            res = response;
        });   
        return response.json(res);
    },
    //remove os produtos
    async delete(request, response){
        const {produto} = request.params;
        console.log(produto);
        let sql = `DELETE FROM produtos WHERE nomeProduto = '${produto}'`;
        await connect.query(sql, function(error, response){
            if(error) throw console.log(error);
        });
        return response.status(204).send({status:"Produto removido com sucesso!"});
    }
}
