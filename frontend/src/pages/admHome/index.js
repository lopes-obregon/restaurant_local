import  React from 'react';
import { Link } from 'react-router-dom';
//importando o estilo
import './styles.css'
export default function AdmHome(){
    const userName = localStorage.getItem('userName');
    return(
        <div className="conteudo">
            <h1>Seja bem vindo {userName}</h1>
            <div>
                <section>
                    <p>Oque deseja fazer ?</p>
                    <div className="container">
                        <Link className="btn btn-primary" to="/cozinha">
                                Ir Cozinha
                        </Link>
                        {'  '}
                        <Link className="btn btn-primary" to="/caixa">
                            Fechar Conta
                        </Link>
                    </div>
                    
                </section>
            </div>
        </div>
    );
}