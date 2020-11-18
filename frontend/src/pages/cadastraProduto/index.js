import React, { useState } from 'react';
import api from '../../services/api';
// import './styles.css';
export default function Cadastra(){
    const [produtoName, setProdutoName] = useState();
    const [valorProduto, setValorProduto] = useState();
    const [remove, setRemove] = useState();
    async function handleInsertTable(e){
        e.preventDefault();
        let json = {
            nomeProduto: produtoName,
            valorProduto: valorProduto
        }
        console.log(json);
        const response = await api.post('produtoCadastro', json);
        alert("Produto Registrado com sucesso");
    }
    async function handleDelete(e){
        e.preventDefault();
        await api.delete(`/produtoCadastro/${remove}`);
        alert("Produto removido com sucesso");
    }
   return(
    <div className="container">
        <h1>Cadastro De Produtos</h1>
        <div>
            <form onSubmit={handleInsertTable} className="form-inline">
                <input type="text" placeholder="Digite o nome do produto" value={produtoName} onChange={e => setProdutoName(e.target.value)}/>
                <input type="text" placeholder="Valor" value={valorProduto} onChange={e => setValorProduto(e.target.value)}  size="4"/>
                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
        <br></br>
        <div>
            <h2>Remover Produto</h2>
            <form onSubmit={handleDelete} className="form-inline">
                <input type="text" placeholder="Digite o nome do produto" value={produtoName} onChange={e => setRemove(e.target.value)}/>
                <input type="submit" value="Remover"/>
            </form>
        </div>
    </div>
   );
}