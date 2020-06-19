import  React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi' ;
import api from '../../services/api';
//import'./style.js'
export default function Register(){
    const [ user, setUser] = useState("");
    const [ password, setPassword ] = useState("");
    async function handleRegister(e){
        e.preventDefault();
        try {
            let json = {
                user:user,
                password:password
            }
            console.log(json);
            await api.post('users', json).then(response =>{
                alert(response.data);
            })
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className="register-container">
            <div className="container">
                <section>
                    <h1>Cadastro</h1>
                    <p>Faça seu Cadastro para acessar o aplicativo</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Informe um ID" type="text" value={user} onChange={e => setUser(e.target.value)}/>
                    <input placeholder="Informe uma senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
        </div>
    );
}