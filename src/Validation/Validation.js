import React, { Component } from 'react';

const ValidationComponent = (props) => {
    const minTextLength = 5;
    let output = null;
    if (props.text.length < minTextLength) {
        output = (
            <p>Text too short</p>
        );
    } else {
        output = (
            <p>Text long enough</p>
        );
    }
    return (
        <div>
            {output}
        </div>
    )
}


export default ValidationComponent;