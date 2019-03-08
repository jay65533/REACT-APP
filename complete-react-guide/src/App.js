import React, { Component } from 'react';
import './App.css';

function getTime() {
  return (new Date()).toLocaleTimeString()
}

class App extends Component {
  
  render() {
    const buttonText = "Click Me!"
    return (
      <div>
        <label className = "label" htmlFor="name">
          Enter name:
        </label>
        <input id = "name" type = "text"/>
        <button style = {{backgroundColor: 'blue', color: 'white'}}>
          {buttonText} 
        </button>
        <div>
          <h1>Current Time:</h1>
          <h2>{getTime()}</h2>
        </div>
      </div>
      
      
    );
  }
}

export default App;
