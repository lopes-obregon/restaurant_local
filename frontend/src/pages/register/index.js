import  React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi' ;
//import'./style.js'
export default function Register(){
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
                <form>
                    <input placeholder="Informe um ID" type="text" />
                    <input placeholder="Informe uma senha" type="password" />
                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
        </div>
    );
}