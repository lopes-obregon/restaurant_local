import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//endereço das paginas
import Login from './pages/login'
import Register from './pages/register';
import AdmHome from './pages/admHome';
import Cozinha from './pages/cozinha';
import Caixa from './pages/caixa';
import Cadastra from './pages/cadastraProduto';
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" exact component={Register} />
                <Route path="/admHome" exact component={AdmHome} />
                <Route path="/cozinha" exact component={Cozinha} />
                <Route path="/caixa" exact component={Caixa} />
                <Route path="/cadastra" exact component={Cadastra} />
            </Switch>
        </BrowserRouter>
    );
}