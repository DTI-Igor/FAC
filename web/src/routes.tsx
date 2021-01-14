import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import CalledList from "./pages/CalledList";
import CalledSugestaoForm from "./pages/CalledForm/CalledSugestao";
import CalledElogioForm from "./pages/CalledForm/CalledElogio";
import CalledDenunciaForm from "./pages/CalledForm/CalledDenuncia";
import CalledReclamacaoForm from "./pages/CalledForm/CalledReclamacao";

function  Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/Called" component={CalledList} />
            <Route path="/CalledSugestaoForm" component={CalledSugestaoForm} />
            <Route path="/CalledElogioForm" component={CalledElogioForm} />
            <Route path="/CalledDenunciaForm" component={CalledDenunciaForm} />
            <Route path="/CalledReclamacaoForm" component={CalledReclamacaoForm} />
        </BrowserRouter>
    )
}

export default Routes;