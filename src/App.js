import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import ValidationComponent from './Validation/Validation';
import CharComponent from './Char/CharComponent';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'shrikrishna', age: 30 },
      { id: 2, name: 'harshad', age: 32 },
      { id: 3, name: 'yash', age: 37 }
    ],
    otherState: 'some value',
    inputText: '',
    showPerson: true
  };

  switchNameHandler = (event, id) => {
    const pIndex = this.state.persons.findIndex(obj => obj.id === id);
    const person = { ...this.state.persons[pIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[pIndex] = person;
    // persons[index].name = event.target.value;
    this.setState({
      persons: persons
    });
  }

  toggleNameHandler = () => {
    // const doesShow = this.state.showPerson.slice();
    const doesShow = [...this.state.showPerson];
    this.setState({
      showPerson: !doesShow
    })
  }

  deletePersonHander = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { id: 1, name: 'shrikrishna', age: 30 },
        { id: 2, name: event.target.value, age: 32 },
        { id: 3, name: 'yash', age: 27 }
      ]
    });
  }

  deleteCharHandler = (event,index) => {
    let inputText = this.state.inputText.slice();
    inputText = inputText.slice(0,index)+inputText.slice(index+1);
    // console.log(event)
    this.setState({
      inputText : inputText
    })
  }

  textLengthHandler = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  name={person.name} age={person.age}
                  key={person.id}
                  changed={(event) => this.switchNameHandler(event, person.id)}
                  click={this.deletePersonHander.bind(this, index)}
                />
              )
            })
          }
        </div>
      );
    }

    let chars = null;
    if (this.state.inputText) {
      chars = (
        <div>
          {
            [...this.state.inputText].map((char, index) => {
              return(
                <CharComponent 
                click = {(event) => this.deleteCharHandler(event,index)}
                character={char} />
              )
            })
          }
        </div>
      )

    }

    return (
      <div className="App">
        <h1>React App</h1>
        <input type="text" id="inputText" value={this.state.inputText} onChange={(event) => this.textLengthHandler(event)}></input>
        <p>{this.state.inputText.length}</p>
        {chars}
        <ValidationComponent text={this.state.inputText}></ValidationComponent>
        <button onClick={this.toggleNameHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
