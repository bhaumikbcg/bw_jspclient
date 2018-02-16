//React files
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import test from './bw_src/BW_TableManagerTest.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="BW_Header">
          <img src={logo} alt="bw"/>
          <h1 className="BW_Title">Welcome to Boardwalk</h1>
          <h2>{test('testTableManager')}</h2>
        </header>
      </div>
   );
  }
}

export default App;
