import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Main from './component/MainComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;