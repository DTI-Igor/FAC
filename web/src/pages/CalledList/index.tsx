import React from "react";
import PageHeader from "../../components/PageHeader";
import CalledItem from "../../components/CalledItem";

function CalledList(){
    return (
        <div id="page-called-list" className="container">
            <PageHeader title="Lista Sugestões" />
            <main>
                <CalledItem></CalledItem>
                <CalledItem></CalledItem>
                <CalledItem></CalledItem>
            </main>
        </div>
    )
}

export default CalledList;