import React, { Component } from 'react';
import Photo from './components/Photo.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <p>Random Cocktail Generator</p>
        <Photo/>
      </div>
    );
  }
}

export default App;
