//React files
import React, { Component } from 'react';
import Dropdown from './form_components/Dropdown'
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <header className="BW_Header">
            <h1 className="BW_Title">Welcome to Boardwalk</h1>
          </header>
          <div className="row">
            <Dropdown />
          </div>
        </div>
      </div>
   );
  }
}
export default App;