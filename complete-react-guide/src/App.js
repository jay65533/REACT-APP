import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Bob"},
      {name: "Jay"},
      {name: "Stephanie"}

    ]
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
  render() {
    return (
      <div className="App">
        <h1>Hi,Boiiiiiiiiiiiiiiiiiiiiiiiii</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name}>My Hobbies: Gaming</Person>
        <Person name = {this.state.persons[1].name}>My Hobbies: Racing</Person>
        <Person name = {this.state.persons[2].name}>My Hobbies: Studying</Person>
      </div>
    );
  }
}

export default App;
