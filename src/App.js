//React files
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
//import './App.css';
//import './css/bootstrap.min.css';
//import './js/bootstrap';
import test from './bw_src/BW_TableManagerTest.js'
//var str = document.getElementById('bw_test');
class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: 'test'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
  getValue(){
    return this.selectValue.value;
  }
  render() {
    //var self = this;
    return (
      <div class="container">
      <div className="App">
        <header className="BW_Header">
          <h1 className="BW_Title">Welcome to Boardwalk</h1>
          <form>
            <div class="form-group">
            <label for="bw_test">Boardwalk Test</label>
            <select value={this.state.value} onChange={this.handleChange} class="form-control form-control-sm"  id="bw_test" >
              <option value="test">Test</option>
              <option value="testTableManager">testTableManager</option>
              <option value="testcolumns">testcolumns</option>
              <option value="testrows">testrows</option>
            </select>
            </div>
          </form>
          <h2>{JSON.stringify(test(this.state.value))}</h2>
        </header>
      </div>
      </div>
   );
  }
}
export default App;