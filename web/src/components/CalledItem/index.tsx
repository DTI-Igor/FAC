import React from "react";

import CheckImg from '../../assets/images/check.svg';
import './style.css';

function CalledItem(){
    return(
        <article className="called-item">
            <header>
                <h1><strong>Almoço</strong></h1>
                <div>
                    <span>Alimentação</span>
                </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti fugiat maiores perspiciatis! Aspernatur autem dicta ducimus eos iure magni quis repellendus tenetur vitae! Deserunt eveniet pariatur perferendis placeat. Libero.</p>
            <footer>
                <p>Criado em: <strong>28/12/2020</strong></p>
                <p>Util<button><img src={CheckImg} alt=""/></button></p>
            </footer>
        </article>
    );
}

export default CalledItem;