import React from 'react';
import { Link } from 'react-router-dom'; // para nao dar um load na pagina e recarregar o react novamente
import { FiLogIn } from 'react-icons/fi';
import './style.css'
export default function Login(){
    return(
        <div className="container">
            <section className="form">
                <form action="">
                    <h1>Faça Seu Login</h1>
                    <input placeholder="Sua ID"/>   
                    <input placeholder="Sua Senha" type="password"/>
                    <input type="submit" value="logar"/>
                    <Link to="/register">
                        <FiLogIn size={16} />
                        Não tenho cadastro
                    </Link>
                </form>
                
            </section>
            
        </div>
    ); 
}