import React, {FormEvent, useState} from "react";

import CheckImg from '../../assets/images/check.svg';
import './style.css';
import {useHistory} from "react-router-dom";
import api from "../../services/api";

export interface Called {
    id?: number;
    title?: string;
    descriptions?: string;
    created_at: string;
    evaluation?: number;
    funcionario?: string;
    descriptioncategories?: string;
    descriptionmanifest?: string;
    descriptionsetor?: string;
}

interface CalledItemProps{
    called: Called;
}

const CalledItem: React.FC<CalledItemProps> = ({ called}) => {

    const history = useHistory();
    const codigoManifest = called.id;
    function formatedData(){
        const date = new Date(called.created_at);
        const formated = (new Intl.DateTimeFormat('pt-br')).format(date);

        return formated;
    }

    function handleUpdateCalled(e: FormEvent){
        e.preventDefault();
        // console.log(codigoManifest);
        api.put('edit_calleds', {
            codigoManifest
        }).then(() => {
            alert("Avaliação realizada com sucesso");
            history.push('/Called');
        }).catch(() => {
            alert('Erro no cadastro');
        })
    }

    return(
        <article className="called-item">
            <header>
                <h1><strong>{called.title}</strong></h1>
                <div>
                    <span id="spanCategories">{called.descriptioncategories}</span>
                    <span id="spanManifest">{called.descriptionmanifest}</span>
                    <span id="spanSetor">{called.descriptionsetor}</span>
                </div>
            </header>
            <p>{called.descriptions}</p>
            <footer>
                <p>Criado em: <strong>{formatedData()}</strong></p>
                <p><strong>{ called.funcionario ? called.funcionario : 'Anonimato'}</strong></p>
                <p>
                    <form onSubmit={handleUpdateCalled}>
                        Util<button type="submit"><img src={CheckImg} alt="Sua avaliação" title="Este campo server para avaliar se o manifesto aberto é util."/></button>
                    </form>

                </p>
            </footer>
        </article>
    );
}

export default CalledItem;