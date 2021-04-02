import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
    const doesShow = [...this.state.showPerson];
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


    let persons = null;

    if(this.state.showPerson) {
      persons = (
        <div>
            {
              this.state.persons.map((person, index) => {
                return(
                  <Person 
                  name={person.name} age={person.age} 
                  key={person.id}
                  changed = { (event) => this.switchNameHandler(event,person.id)}
                  click = { this.deletePersonHander.bind(this,index)}
                  />
                )
              })
            }
            {/* <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
              click = {this.switchNameHandler.bind(this,'Ramrao')}
            />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click = {this.switchNameHandler.bind(this,'Raj')}
              changed = {this.nameChangedHandler}
              >My Hobbies: Racing
            </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              click = {this.switchNameHandler.bind(this,'Rajesh')}
            /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React App</h1>
          <button onClick = {this.toggleNameHandler}>Switch Name</button>
          { persons }
      </div>
    );
  }
}

export default App;
