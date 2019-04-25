import React from "react";
import './style.css';

function Card(props) {
    return (
    
        <img className="rounded-circle m-3 hover11 column" type="button" 
        alt={props.name} src={props.image} onClick={() => props.id} />
    
        
    );
}

export default Card;
