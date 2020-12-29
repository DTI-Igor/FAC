import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import CalledList from "./pages/CalledList";
import CalledForm from "./pages/CalledForm";

function  Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/Called" component={CalledList} />
            <Route path="/CalledForm" component={CalledForm} />
        </BrowserRouter>
    )
}

export default Routes;