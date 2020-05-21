import React from 'react';
import { useState } from 'react';
import api from '../../services/api';
import ReactDom from 'react-dom';

export default function Caixa(){
    const [numMesa, setNumMesa] = useState();
    const [produto, setProduto] =  useState();
    const [produtoMesa, setProdutoMesa] = useState();
    let aux = "";
    let json = {
        nomeProdutoDb:[],
        valorProdutoDb:[],
        nomeProdutoCliente:[],
        quantidadeProduto:[],
        produtos:"",
        numeroMesa:"",
        valor:0
    };
    async function handleSearchTable(e){
        e.preventDefault();
        //faz as consulta com seus valores
        api.get('/produtos').then(response =>{
            setProduto(response.data);
        });
        for(let i in produto){
            json.nomeProdutoDb.push(produto[i].nomeProduto);
            json.valorProdutoDb.push(produto[i].valor);
        }
        try {
            await api.post(`/pedidoss/${numMesa}`).then(response =>{
                setProdutoMesa(response.data);
            });
            //insere os valores no dicionario
            for(let i in produtoMesa.produto){
                //converter em inteiro pq o index está como string
                if(Number(i) + 1 === produtoMesa.produto.length){
                    json.nomeProdutoCliente.push(removeSpaceEndString(produtoMesa.produto[i]));
                }else{
                    json.nomeProdutoCliente.push(produtoMesa.produto[i]);
                }
                json.quantidadeProduto.push(produtoMesa.quantidade[i])

            }
            await api.post('/produtos', json).then(response =>{
               json.valor = response.data;
            });
            for(let i in json.nomeProdutoCliente){
                aux = aux + json.quantidadeProduto[i] +" " + json.nomeProdutoCliente[i] + " ";
            }
            json.produtos = aux;
            json.numeroMesa = numMesa;
            console.log(json);
            ReactDom.render(<Card mesa={json} />, document.getElementById('caixa'));


        } catch (error) {
            alert(`Mesa ${numMesa}, não há pedidos realizados`);
        }
    };
    /*
    async function handleFechaMesa(mesaNum){
        api.delete(`/pedidoss/${mesaNum}`).then(response=>{
            console.log(response);
        })
    };*/
    //
    return(
       <div>
           <h1>Caixa</h1>
           
            <form onSubmit={handleSearchTable}>
                <input type="search" placeholder="Numero Da Mesa" value={numMesa} onChange={e => setNumMesa(e.target.value)} />
                <input type="submit" value="pesquisar" />
            </form>
            <div id="caixa">

            </div>

       </div>
    );
}
//abre a div card depois que pesquisar a mesa
//função para retornar a string sem o espaçõ no final
function removeSpaceEndString(string){
    let aux= "";
    for(let i in string){
        if(Number(i)+1 !== string.length){

            aux = aux + string[i];
        }
    }
    return aux;
}
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mesa:props.mesa.numeroMesa,
            produto:props.mesa.produtos,
            valorTotal:props.mesa.valor.msg
        }
    };
    render(){
        console.log(this.state);
        return(
            <div className="card" style={{width:'18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Mesa:{this.state.mesa} </h5>
                    <p className="card-text"></p>
                    <button className="btn btn-primary"> Fechar Pedido</button>
                    <p>{this.state.produto}</p>
                    <strong>Valor:</strong>
                    <p>{this.state.valorTotal}</p>
                </div>
        </div>
        );
    }
}