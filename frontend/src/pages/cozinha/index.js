import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../services/api';

import './styles.css'
const CadStyle = {
    maxWidth: '18rem'
}
export default function Cozinha(){
    const [produtos, setProdutos] = useState([]);
    //const userId = localStorage.getItem('userId');
    useEffect(() =>{
        api.get('pedidoss').then(response =>{
            setProdutos(response.data);
        })
    })
    async function handleEntregaPedido(mesaNum){
        try {
            await api.get(`/pedidoss/${mesaNum}`);
            setProdutos(produtos.filter(produtoCozinha =>produtoCozinha.mesa_ou_nome !== mesaNum));
        } catch (error) {
            alert("error ao entregar o pedido")
        }
    }
    return(
       <div className="cozinha">
            <h1>Cozinha</h1>
            <div>
                <ul>
                    {produtos.map(produtoCozinha =>(
                        <li>
                            <div className="card text-white bg-primary mb" style={CadStyle} >
                                <div className="card-header">Numero Da Mesa: {produtoCozinha.mesa_ou_nome}</div>
                                <div className="card-body">
                                    <h5 className="card-title">Pedidos</h5>
                                    <p>{produtoCozinha.pedido}</p>
                                    <button type="button" onClick={handleEntregaPedido(produtoCozinha.mesa_ou_nome)} className="btn btn-success">Entregar Pedido</button>
                                </div>
                                </div>
                        </li>
                    ))}
                </ul>
            </div>
       </div>
    );
}