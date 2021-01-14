import React from "react";
import { Link } from "react-router-dom";
import dataSvg from '../../assets/images/data.svg';
import './style.css';

interface CardItemProps{
    title: string;
    subtitle: string;
    route: string;
    color?: string;
}

const CardItem: React.FC<CardItemProps> = (props) => {
    return(
        <div className="card" style={{ backgroundColor: props.color }} >
            <Link to={props.route}>
                <div className="card-title">
                    <h2 className="card-title">{props.title}</h2>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.subtitle}</p>
                </div>
            </Link>
        </div>
    );
}

export default CardItem;