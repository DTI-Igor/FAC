import React from "react";
import logoImg from '../../assets/images/jua.png';
import { Link } from 'react-router-dom';
import './styles.css'

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Sabão Juá"/>
                    <h2 className="h2Titulo">Juá Sugestões/Reclamação</h2>
                </div>
                <div className="buttons-container">
                    <Link to="/Called">Lista Ocorrencias</Link>
                    <Link to="/CalledForm">Cadastrar Ocorrencia</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;