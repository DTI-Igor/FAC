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
                title="Cadastro de Sugestões"
                subtitle="As informações serão colhidas anonimas!"
            />
            <main>
                <form onSubmit={handleCreateCalled}>
                <fieldset>
                    <legend>Cadastro</legend>
                    
                    <div className="input-block">
                        <label htmlFor="">Titulo</label>
                        <input type="text" id="title" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    </div>
                    <div className="input-block">
                        {/*aqui na verdade é um select*/}
                        <label htmlFor="">Categoria</label>
                        <select id="id_categoires" name="id_categoires" value={categorie} onChange={(e) => {setCategorie(e.target.value)}} required>
                            <option value=""></option>
                            <option value="1">Alimentação</option>
                            <option value="2">CIPA</option>
                            <option value="3">Confraternização</option>
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