import React, { Component } from 'react';
import Photo from './components/Photo.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <p className="header">Random Cocktail Generator</p>
        <Photo/>
      </div>
    );
  }
}

export default App;
