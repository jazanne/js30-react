import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    document.querySelector("html").classList = "";
  }

  render() {
    return (
        <div className="App">
        <p>Check out a project</p>
        </div>
    );
  }
}

export default App;
