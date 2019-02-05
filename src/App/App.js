import React, { Component } from 'react'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Main from '../Main/Main'
import '../styles/main.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      activePage: 'overview'
    }
  }

  changePage = (string) => {
    this.setState({
      activePage: string
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav changePage={this.changePage} />
        <Main activePage={this.state.activePage} />
      </div>
    );
  }
}

export default App
