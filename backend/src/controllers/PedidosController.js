const connect = require('../databse/connect');

module.exports = {
    async create(request, response){
        /**
         * quem pode realizar os pedidos apenas pessoas autorizadas
         * como garçon.
         * atualizar caso não haja insere.
         */
        
        const { pedido, pedido_entregue, mesa_ou_nome } = request.body;
        const usersId = request.headers.authorization;
        console.log(mesa_ou_nome);
        let sql = `UPDATE pedidos SET pedido = '${pedido}', pedido_entrege = '${pedido_entregue}' WHERE mesa_ou_nome = '${mesa_ou_nome}' `;
        const [id] = await connect.query(sql, function(error, result){
            if(error){
                console.log("ERROR: " + error);
            }else{
                console.log("Linhas:" + result.affectedRows);
                //se não existe então insere no banco
                if(result.affectedRows == 0){
                    console.log("vazio");
                    //insere 
                    console.log(pedido);
                    sql = `INSERT INTO pedidos (pedido, pedido_entrege, mesa_ou_nome) VALUES ('${pedido}', '${pedido_entregue}', '${mesa_ou_nome}')`;
                    [id] =  connect.query(sql);
                }
                
            }
        });
        return response.json({ id });
    },
    async index(request, response){
        //retorna os pedidos que não foram entregues
        //no caso pedidos para a mesa ver
        await connect.query("SELECT * FROM pedidos WHERE pedido_entrege = 'false'", function(error, pedidos){
            if(error) throw error;
            return  response.json(pedidos);
        })
    },
    async delete(request, response){
        /**
         * deletar os pedidos já feitos para não aver acumulo e peso no banco de dados
         * o id relacioando é o id do admin no caso o dono do restaurante
         */
        const { mesa } = request.params;
        let sql = `SELECT * FROM pedidos WHERE mesa_ou_nome = '${mesa}'`;
         /**
        * vem com o parametro da mesa
        * pesquisa a mesa e retornar para essa função
        */
        //varial para armazenar todos os dados da mesa
        await connect.query(sql, function(error, [rows]){
            if(error) throw error;
            let dic;
            dic =  nomeEquantidadeLimpo(rows.pedido);
            let jsonReturn = {
                produto : [],
                quantidade : [],
            }
            for(var [produto, quantidade] of dic){
                jsonReturn.produto.push(produto);
                jsonReturn.quantidade.push(quantidade);
            }
            return response.json(jsonReturn);
        });
        
        //console.log(a);
        //const admId =  request.headers.authorization;
        //let sql = `DELETE FROM pedidos WHERE mesa_ou_nome = '${mesa}' AND pedido_entrege = 'true' `;
        //await connect.query(sql);
        
        //return response.status(204).send({status:"Pedido finalizado com sucesso"});
    },
    async entreguePedido(request, response){
        /**
         * coloca o pedido como entregue
         */
        const {mesa} = request.params;
        let sql = `UPDATE pedidos SET pedido_entrege = 'true' WHERE mesa_ou_nome = '${mesa}'`;
        await connect.query(sql, function(error, result){
            if(error) throw error;
            let mensagem = "Pedido da mesa : " + mesa +", "+ "Está pronto para entrega";
            return response.json({ msg: mensagem });
        
        });
        
    },
    
}

function nomeEquantidadeLimpo(itens){
    /**
     * itens deve vir de forma de string
     */
    //conta para saber onde vai separar
    //dicionario para armazenar o nome e a quantidade
    let dic = new Map();
    let vectorItens = itens.split(",");//array para armazenar separado a frase
    //transformar em uma nova string novamente
    for(let i in vectorItens){
        itens = vectorItens[i];
        dic.set(removeNumber(itens), retornaValor(itens));
    }
    //variavel para entrar no banco
    return dic;
}
//função que retorna o valor da quantidade
function retornaValor(palavra){
    let vector = palavra.split(" ");
    for(let i in vector){
        for(let j = 0; j < 11; j++){
            if(vector[i] == j.toString()){
                return vector[i];
            }
        }
    }
}
//função que remove a quantidade
function removeNumber(palavra){
    let vector = palavra.split(" ");
    let retorno = "";
    for(let i in vector){
        for(let j = 0; j < 11; j++){
            if(vector[i] == j.toString()){
                vector.splice(i, 1)
                //aqui remove a quantidade.
                if(vector.length > 2){
                    //chama a função para retornar outra coisa
                    retorno = juntaPalavra(vector);
                }else{
                    retorno = retorno + vector;
                }

            }
        }
    }
    return retorno;
}
//função que junta a palavra
function juntaPalavra(vector){
    let frase = "";
    for(let i in vector){
        
        //remove o nada
        if(vector[i] != ''){
            
            //significa que não está no final
            if(i < vector.length){
                //forma a frase
                frase = frase + vector[i];
                frase = frase + " ";
            } 
        }
    }
    return frase;
}