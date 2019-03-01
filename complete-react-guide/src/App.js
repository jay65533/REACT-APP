import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Bob"},
      {name: "Jay"},
      {name: "Stephanie"}
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    console.log("was clicked!")
    this.setState({
      persons: [
        {name: "Tabitha"},
        {name: "Drew"},
        {name: "Soma"}
      ]
    })
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '5px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map()}
          <Person 
            name = {this.state.persons[0].name}
            click = {this.switchNameHandler}>My Hobbies: Gaming
          </Person>
          <Person 
            name = {this.state.persons[1].name}
            click = {this.switchNameHandler}>My Hobbies: Racing
          </Person>
          <Person 
            name = {this.state.persons[2].name}
            click = {this.switchNameHandler}>My Hobbies: Studying
          </Person>
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi,Boiiiiiiiiiiiiiiiiiiiiiiiii</h1>
        <button 
          style = {style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
