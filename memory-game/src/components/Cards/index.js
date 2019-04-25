import React from "react";
import './style.css';

function Card(props) {
    return (
        <img className="rounded-circle" type="button" 
        alt={props.name} src={props.image} onClick={() => props.id} />
    );
}

export default Card;
