import React from 'react'
import classes from './Person.css'
import styled from 'styled-components';


const StyledDiv = styled.div`
    border : 1px solid gray;
    width : 60%;
    margin: auto;
    margin-top: 10px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 2px 3px lightslategrey;
    `;


const Person = (props) => {

    
    return (
        // <StyledDiv>
        //  <p onClick={props.click}> i'm {props.name} a person with age : { props.age }</p>
        // <p>{props.children}</p>
        // <input type="text" onChange={props.changed} value={props.name}/>
        // </StyledDiv>
    <div className={classes.Person}>
    
        <p onClick={props.click}> i'm {props.name} a person with age : { props.age }</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default Person;