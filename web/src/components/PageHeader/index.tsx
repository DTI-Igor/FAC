import React from "react";
import {Link} from "react-router-dom";
import BackIcon from "../../assets/images/back.svg";
import LogoImg from "../../assets/images/jua.png";

import './style.css';

interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={BackIcon} alt="Home"/>
                </Link>
                <img src={LogoImg} alt=""/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
            </div>
        </header>
    );
}

export default PageHeader;