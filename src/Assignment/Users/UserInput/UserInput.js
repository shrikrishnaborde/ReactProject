import React, { Component } from 'react'

const UserInput = (props) => {
    return(
        <div>
            <input type="text" value={ props.name} onChange = { props.nameChangeEvent }/>
        </div>
    )
}

export default UserInput;