import React, { Component } from 'react';
import Button from './components/Button.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <p>Random Cocktail Generator</p>
        <Button/>
      </div>
    );
  }
}

export default App;
