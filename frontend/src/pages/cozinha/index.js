import React from 'react';
const CadStyle = {
    maxWidth: '18rem'
}
export default function Cozinha(){
    return(
       <div>
            <h1>Cozinha</h1>
            <div>
                <ul>
                <li>
                   <div className="card text-white bg-primary mb" style={CadStyle} >
                        <div className="card-header">Numero Da Mesa:</div>
                        <div className="card-body">
                            <h5 className="card-title">15</h5>
                            <p>batata, Refri</p>
                            <button type="button" className="btn btn-success">Entregar Pedido</button>
                        </div>
                   </div>
                </li>
                <li>
                    <div className="card text-white bg-primary mb" style={CadStyle} >
                        <div className="card-header">Numero Da Mesa:</div>
                        <div className="card-body">
                            <h5 className="card-title">26</h5>
                            <p>batata, Refri</p>
                            <button type="button" className="btn btn-success">Entregar Pedido</button>
                        </div>
                   </div>
                </li>
            </ul>
            </div>
       </div>
    );
}