import React, { Component } from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    return (
        <div className="CharComponent">
            <p onClick={props.click}>{props.character}</p>
        </div>
    )
}

export default CharComponent;