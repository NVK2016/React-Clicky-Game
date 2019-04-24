import React from 'react';
import logo from '../../logo.json';
import './style.css';

function Navbar(props) {
    return (
       <div>
          <div className="container-fluid">
             <div className="row">
                <div className="col-3">
                   <div>Memory Test Game</div>
                </div>
                <div className="col-6" id="game-message">
                   <div>{props.message}</div>
                </div>
                <div className="col-3" id="game-score">
                   <div>Score: {props.score} | Top Score: {props.topScore}</div>
                </div>
             </div>
          </div>
       </div>
    );
 }
 
 export default Navbar;