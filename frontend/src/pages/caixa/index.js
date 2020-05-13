import React from 'react';

export default function Caixa(){
    return(
       <div>
           <h1>Caixa</h1>
           
            <form action="">
                <input type="search" placeholder="Numero Da Mesa"/>
                <input type="button" value="pesquisar"/>
            </form>
            
            <div className="card" style={{width:'18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Mesa 26</h5>
                    <p className="card-text">batata, refri</p>
                    <button className="btn btn-primary"> Fechar</button>
                    <p></p>
                    <strong>Valor:</strong>
                    <p>150</p>
                </div>
           </div>

       </div>
    );
}
//abre a div card depois que pesquisar a mesa