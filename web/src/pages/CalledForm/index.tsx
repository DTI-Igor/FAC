import React from "react";
import PageHeader from "../../components/PageHeader";

import './style.css';

function CalledForm(){
    return (
        <div id="page-called-form" className="container">
            <PageHeader
                title="Cadastro de Sugestões"
                subtitle="As informações serão colhidas anonimas!"
            />
            <main>
                <fieldset>
                    <legend>Cadastro</legend>
                    
                    <div className="input-block">
                        <label htmlFor="">Titulo</label>
                        <input type="text" id="title"/>
                    </div>
                    <div className="input-block">
                        {/*aqui na verdade é um select*/}
                        <label htmlFor="">Categoria</label>
                        <select id="categories" required>
                            <option value=""></option>
                            <option value="">Alimentação</option>
                            <option value="">CIPA</option>
                            <option value="">Produção</option>
                            <option value="">Escritorio</option>
                        </select>
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Descrição</label>
                        <textarea id="textDescription"></textarea>
                    </div>
                </fieldset>
                <footer>
                    <button type="button">Salvar Cadastro</button>
                </footer>
            </main>
        </div>
    )
}

export default CalledForm;