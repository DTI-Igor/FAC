import React from "react";
import logoImg from '../../assets/images/jua.png';
import './styles.css'
import CardItem from "../../components/CardItem";

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Sabão Juá"/>
                    <h2 className="h2Titulo">O que deseja fazer?</h2>
                </div>
                <div className="buttons-container">
                    <CardItem title="Sugestão" subtitle="Informe uma sugestão!" route="/CalledSugestaoForm"/>
                    <CardItem title="Elogio" subtitle="Informe um elogio!" route="/CalledElogioForm"/>
                    {/* <CardItem title="Solicitação" subtitle="Informe uma solicitação!" route="/CalledForm"/> */}
                    <CardItem title="Reclamação" subtitle="Informe uma reclamação!" route="/CalledReclamacaoForm"/>
                    <CardItem title="Denuncia" subtitle="Informe uma denuncia!" route="/CalledDenunciaForm"/>
                    <CardItem title="Acesso a informação" subtitle="Acessar lista de manifesto abertos!" route="/Called"  color="rgb(54, 87, 65)" />
                </div>
            </div>
        </div>
    )
}

export default Landing;