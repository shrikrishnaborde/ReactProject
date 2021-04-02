import React, { Component } from 'react'
import UserOutput from './Assignment/Users/UserOutput/UserOutput'
import UserInput from './Assignment/Users/UserInput/UserInput'

class App extends Component {

    state = {
        userName : 'Shrikrihna'
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName : event.target.value
        })
    }

    render(){
        return(
            <div>
                <UserInput name={this.state.userName} nameChangeEvent = { this.handleUserNameChange.bind(this) }></UserInput>
                <UserOutput name= { this.state.userName }></UserOutput>
                <UserOutput name="harshad"></UserOutput>
                <UserOutput name="raghu"></UserOutput>
            </div>
        )
    }
}

export default App;