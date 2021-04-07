import React, { Component } from 'react';
import classes from './App.css';
import styled from 'styled-components';
import Person from './Person/Person';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';

const StyledButton =  styled.button`
    background-color: ${props => props.alt ? 'green':'red'};
    text-align: center;

    &:hover {
      background-color : salmon;
    }
    `;

class App extends Component {

  state = {
    persons : [
      { id: 1, name : 'shrikrishna', age : 30},
      { id: 2, name : 'harshad', age : 32},
      { id: 3, name : 'yash', age : 37}
    ],
    otherState : 'some value',
    showPerson : true
  };

  switchNameHandler = (event,id) => {
    const pIndex = this.state.persons.findIndex(obj => obj.id === id);
    const person = { ...this.state.persons[pIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[pIndex] = person;
    // persons[index].name = event.target.value;
    this.setState({
      persons : persons
    });
  }

  toggleNameHandler = () => {
    // const doesShow = this.state.showPerson.slice();
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson : !doesShow
    })
  }

  deletePersonHander = (index) => {
    const persons = this.state.persons;
    persons.splice(index,1);
    this.setState({
      persons : persons
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { id: 1, name : 'shrikrishna', age : 30},
        { id: 2, name : event.target.value, age : 32},
        { id: 3, name : 'yash', age : 27}
      ]
    });
  }

  render() {

    // const style ={
    //   color: 'white',
    //   backgroundColor: 'black'
    // };

    let persons = null;

    const btnClasses = [classes.Button];

    if(this.state.showPerson) {
      persons = (
        <div>
            {
              this.state.persons.map((person, index) => {
                return(
                  <ErrorBoundry key={person.id}>
                    <Person 
                    name={person.name} age={person.age} 
                    changed = { (event) => this.switchNameHandler(event,person.id)}
                    click = { this.deletePersonHander.bind(this,index)}
                    />
                  </ErrorBoundry>
                )
              })
            }
        </div>
      );
      // style.backgroundColor = 'red';
      btnClasses.push(classes.Red)
    }

    const assignedClasses = [];
    if(this.state.persons.length <=2) {
      assignedClasses.push(classes.Red)
    }
    if(this.state.persons.length <=1) {
      assignedClasses.push(classes.Bold)
    }

    btnClasses.push(...assignedClasses);

    return (
      <div className={classes.App}>
        <h1>React App</h1>
          <button 
          className={btnClasses.join(' ')}
          alt = { this.state.showPerson}
          //style={styledButton}
          //className={classes.join(' ')}
          onClick = {this.toggleNameHandler}>Switch Name</button>
          { persons }
      </div>
    );
  }
}

export default App;
