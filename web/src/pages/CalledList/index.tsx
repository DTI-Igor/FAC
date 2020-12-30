import React, {useState} from "react";
import PageHeader from "../../components/PageHeader";
import CalledItem, { Called } from "../../components/CalledItem";
import api from "../../services/api";


function CalledList() {
    const [calleds, setCalleds] = useState([]);

    async function searchCalled() {
        const response = await api.get('lists_calleds');
        setCalleds(response.data);
    }

    return (
        <div id="page-called-list" className="container">
            <PageHeader title="Lista Sugestões"/>
            <button onClick={searchCalled}>carregar</button>
            <main>
                {calleds.map((called: Called) => {
                    return <CalledItem key={called.id} called = {called}/>;
                })}
            </main>
        </div>
    )
}

export default CalledList;