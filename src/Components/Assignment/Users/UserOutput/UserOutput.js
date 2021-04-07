import React, { Component } from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return(
        <div className="UserOutput">
            <p onClick= { props.nameChangeEvent }>abcd</p>
            <p>{ props.name }</p>
        </div>
    )
}

export default UserOutput;