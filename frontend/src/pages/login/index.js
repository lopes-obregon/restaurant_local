import React from 'react';
import { Link, useHistory } from 'react-router-dom'; // para nao dar um load na pagina e recarregar o react novamente
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import './style.css'
import { useState } from 'react';
//imports imagens
import loginImage from '../../imagens/photoLogin.jpg';

export default function Login(){
    const [user, setId] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();
        try{
            //create json format
            let json ={
                user:user,
                password:password
            }
            const response = await api.post('sessions', json);
            localStorage.setItem('userId', user);
            localStorage.setItem('userName', response.data);
            history.push('/admHome');
        }catch(err){
            alert("Falha no login tente novamente");
        }
    }
    return(
        <div className="back">
            <div className="login-container">
            <section className="form">
                <img src={loginImage} alt="imagem-login" className="rounded float-left"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça Seu Login</h1>
                    <input placeholder="Sua ID" value={user} onChange={e => setId(e.target.value)} className="form-control"  />   
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" >Senha</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} /> 
                    </div>
                    <input type="submit" value="Entrar" className="btn btn-primary" />
                    <Link to="/register">
                        <FiLogIn size={16} />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            
        </div>
        </div>
    ); 
}