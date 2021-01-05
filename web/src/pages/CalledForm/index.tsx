import React, {FormEvent, useState} from "react";
import PageHeader from "../../components/PageHeader";
import { useHistory } from 'react-router-dom';

import './style.css';
import api from "../../services/api";
import moment from "moment";
import {format} from "util";

function CalledForm(){

    const history = useHistory();
    const [title, setTitle] = useState('');
    const [categorie, setCategorie] = useState('');
    const [descriptions, setDescription] = useState('');

    function getTime(){
        const timestamp = moment().format('L')+' '+moment().format('LT');

        return timestamp;
    }

    function handleCreateCalled(e: FormEvent){
        e.preventDefault();
        // console.log({
        api.post('created_calleds', {
            title,
            descriptions,
            created_at: getTime(),
            id_categories: categorie,
        }).then(() => {
            alert("Cadastro realizado com sucesso");
            history.push('/Called');
        }).catch(() => {
            alert('Erro no cadastro');
        })
    }
    return (
        <div id="page-called-form" className="container">
            <PageHeader
                title="Cadastro de Manifestação"
                subtitle="As informações serão colhidas anonimas!"
            />
            <main>
                <form onSubmit={handleCreateCalled}>
                <fieldset>
                    <legend>Cadastro</legend>
                    <div className="input-block">
                        <label htmlFor="">Tipo Manifestação</label>
                        <select id="#" name="#" onChange={(e) => {}} required>
                            <option value=""></option>
                            <option value="1">Reclamação</option>
                            <option value="2">Elogio</option>
                            <option value="3">Sugestão</option>
                            <option value="4">Denuncia</option>
                            <option value="5">Solicitação</option>
                        </select>
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Setor - <strong>Opcional</strong></label>
                        <select id="#" name="#" onChange={(e) => {}}>
                            <option value=""></option>
                            <option value="1">Tecnologia da Informação</option>
                            <option value="2">Gerência Comercial</option>
                            <option value="3">Gerência Financeira</option>
                            <option value="4">Contabilidade</option>
                            <option value="5">Fiscal</option>
                            <option value="6">Recursos Humano</option>
                            <option value="7">Gerência Administrativa</option>
                            <option value="8">Faturamento</option>
                            <option value="9">Pedidos</option>
                            <option value="10">Recepção</option>
                            <option value="11">Estoque</option>
                            <option value="12">Expedição</option>
                            <option value="13">Sopro</option>
                            <option value="14">Liquido</option>
                            <option value="15">Barra</option>
                            <option value="16">Almoxarifado</option>
                            <option value="17">Setor Pó</option>
                            <option value="18">Gerência Produção</option>
                            <option value="19">Laboratorio</option>
                            <option value="20">Qualidade</option>
                        </select>
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Identificação - <strong>Opcional</strong></label>
                        <h6>Caso queira se identificar, informe seu nome.</h6>
                        <input type="text" id="#" name="#" onChange={(e) => {}}/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Titulo</label>
                        <input type="text" id="title" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Categoria</label>
                        <select id="id_categoires" name="id_categoires" value={categorie} onChange={(e) => {setCategorie(e.target.value)}} required>
                            <option value=""></option>
                            <option value="1">Alimentação</option>
                            <option value="2">CIPA</option>
                            <option value="3">Produção</option>
                            <option value="4">Administração</option>
                        </select>
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Descrição</label>
                        <textarea id="descriptions" name="descriptions" value={descriptions} onChange={(e) => {setDescription(e.target.value)}}></textarea>
                    </div>
                </fieldset>
                <footer>
                    <button type="submit">Salvar Cadastro</button>
                </footer>
                </form>
            </main>
        </div>
    )
}

export default CalledForm;