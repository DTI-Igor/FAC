import React, {useEffect, useState} from "react";
import PageHeader from "../../components/PageHeader";
import CalledItem, { Called } from "../../components/CalledItem";
import api from "../../services/api";


function CalledList() {
    const [calleds, setCalleds] = useState([]);

        useEffect(() => {
            api.get('lists_calleds').then(response =>{
                setCalleds(response.data);
            })
        }, []);  

    return (
        <div id="page-called-list" className="container">
            <PageHeader title="Ocorrencias"/>
            <main>
                {calleds.map((called: Called) => {
                    return <CalledItem key={called.id} called = {called}/>;
                })}
            </main>
        </div>
    )
}

export default CalledList;