//React files
import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import './css/bootstrap.min.css';
//import './js/bootstrap';
import test from './bw_src/BW_TableManagerTest.js'

class App extends Component {
  render() {
    return (
      <div class="container">
      <div className="App">
        <header className="BW_Header">
          <h1 className="BW_Title">Welcome to Boardwalk</h1>
          <form>
            <div class="form-group">
            <label for="bw_test">Boardwalk Test</label>
            <select class="form-control form-control-sm" id="bw_test">
              <option>testTableManager</option>
              <option>testcolumns</option>
            </select>
            </div>
          </form>
          <h2>{JSON.stringify(test(document.getElementById('bw_test')))}</h2>
        </header>
      </div>
      </div>
   );
  }
}

export default App;