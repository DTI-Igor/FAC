import React from "react";

import CheckImg from '../../assets/images/check.svg';
import './style.css';

export interface Called {
    id: number;
    title: string;
    descriptions: string;
    created_at: string;
    evaluation: number;
    descriptionsCategorie: string;
}

interface CalledItemProps{
    called: Called;
}

const CalledItem: React.FC<CalledItemProps> = ({ called}) => {
    return(
        <article className="called-item">
            <header>
                <h1><strong>{called.title}</strong></h1>
                <div>
                    <span>{called.descriptionsCategorie}</span>
                </div>
            </header>
            <p>{called.descriptions}</p>
            <footer>
                <p>Criado em: <strong>{called.created_at}</strong></p>
                <p><strong>Anónimo</strong></p>
                <p>Util<button><img src={CheckImg} alt=""/></button></p>
            </footer>
        </article>
    );
}

export default CalledItem;