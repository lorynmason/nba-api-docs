import React, { Component } from 'react';
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Main from '../Main/Main'
import '../styles/main.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
