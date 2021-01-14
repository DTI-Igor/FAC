import React, {FormEvent, useState} from "react";
import PageHeader from "../../components/PageHeader";
import { useHistory } from 'react-router-dom';

import './style.css';

import api from "../../services/api";

function CalledForm(){

    const history = useHistory();
    // const [categorie, setCategorie] = useState('');
    const [funcionario, setFuncionario] = useState('');
    const [setor, setSetor] = useState('21');
    // const [produto, setProduto] = useState('');
    // const [datacomprada, setDatacomprada] = useState('null');
    // const [localcompra, setLocalcompra] = useState('');
    // const [loteproduto, setLoteproduto] = useState('');
    // const [nomecliente, setNomecliente] = useState('');
    const [title, setTitle] = useState('');
    // const [reason, setReason] = useState('');
    const [descriptions, setDescription] = useState('');

    function handleCreateCalled(e: FormEvent){
        e.preventDefault();
        // console.log({
        api.post('created_calleds', {
            id_manifest: 3,
            // id_categories: categorie,
            funcionario,
            setor,
            // produto,
            // datacomprada,
            // localcompra,
            // loteproduto,
            // nomecliente,
            title,
            // reason,
            descriptions,
            created_at: "now()",
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
                    <legend>Cadastro de Reclamação</legend>
                    {/*<div className="input-block">*/}
                    {/*    <label htmlFor="">Categoria</label>*/}
                    {/*    <select id="id_categoires" name="id_categoires" value={categorie} onChange={(e) => {setCategorie(e.target.value)}}>*/}
                    {/*        <option value=""></option>*/}
                    {/*        <option value="1">Produto</option>*/}
                    {/*        <option value="2">Motorista</option>*/}
                    {/*        <option value="3">Vendedor</option>*/}
                    {/*        <option value="4">Supervisor</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    <div className="input-block">
                        <label htmlFor="">Identificação - <strong>Opcional</strong></label>
                        <h6>Caso queira se identificar, informe seu nome.</h6>
                        <input type="text" id="funcionario" name="funcionario" value={funcionario} onChange={(e) => {setFuncionario(e.target.value)}}/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Reclamão para setor - <strong>Opcional</strong></label>
                        <select id="setor" name="setor" value={setor} onChange={(e) => {setSetor(e.target.value)}}>
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
                            <option value="19">Laboratório</option>
                            <option value="20">Qualidade</option>
                        </select>
                    </div>
                    {/*<div id="hidden">*/}
                        {/* De acordo com o input do tipo radio  */}
                        {/*<div className="input-block">*/}
                        {/*    <label htmlFor="">Produto</label>*/}
                        {/*    <input type="text" id="title" name="title" value={produto} onChange={(e) => {setProduto(e.target.value)}}/>*/}
                        {/*</div>*/}
                        {/*<div className="input-block">*/}
                        {/*    <label htmlFor="">Data da compra</label>*/}
                        {/*    <input type="date" id="title" name="title" value={datacomprada} onChange={(e) => {setDatacomprada(e.target.value)}}/>*/}
                        {/*</div>*/}
                        {/*<div className="input-block">*/}
                        {/*    <label htmlFor="">Local da Compra</label>*/}
                        {/*    <input type="text" id="title" name="title" value={localcompra} onChange={(e) => {setLocalcompra(e.target.value)}}/>*/}
                        {/*</div>*/}
                        {/*<div className="input-block">*/}
                        {/*    <label htmlFor="">Lote do Produto</label>*/}
                        {/*    <input type="text" id="title" name="title" value={loteproduto} onChange={(e) => {setLoteproduto(e.target.value)}}/>*/}
                        {/*</div>*/}
                        {/*<div className="input-block">*/}
                        {/*    <label htmlFor="">Cliente</label>*/}
                        {/*    <input type="text" id="title" name="title" value={nomecliente} onChange={(e) => {setNomecliente(e.target.value)}}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div className="input-block">
                        <label htmlFor="">Titulo da Reclamação</label>
                        <input type="text" id="title" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} required/>
                    </div>
                    {/*<div className="input-block">*/}
                    {/*    <label htmlFor="">Qual motivo da Reclamação?</label>*/}
                    {/*    <textarea id="descriptions" name="descriptions" value={reason} onChange={(e) => {setReason(e.target.value)}} required></textarea>*/}
                    {/*</div>*/}
                    <div className="input-block">
                        <label htmlFor="">Descrição da Reclamação</label>
                        <textarea id="descriptions" name="descriptions" value={descriptions} onChange={(e) => {setDescription(e.target.value)}} required></textarea>
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