import React from 'react';
import { Link, useHistory } from 'react-router-dom'; // para nao dar um load na pagina e recarregar o react novamente
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import './style.css'
import { useState } from 'react';
export default function Login(){
    const [user, setId] = useState();
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('sessions', { user });
            console.log(response);
            localStorage.setItem('userId', user);
            localStorage.setItem('userName', response.data.name);
            history.push('/admHome');
        }catch(err){
            alert("Falha no login tente novamente");
        }
    }
    return(
        <div className="container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Faça Seu Login</h1>
                    <input placeholder="Sua ID" value={user} onChange={e => setId(e.target.value)}/>   
                    <input placeholder="Sua Senha" type="password"/>
                    <input type="submit" value="Entrar"/>
                    <Link to="/register">
                        <FiLogIn size={16} />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            
        </div>
    ); 
}