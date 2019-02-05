import React, { Component } from 'react';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      activePage: 'overview'
    }
  }

  render(){
    return(
      <main>
        <h2>OVERVIEW</h2>
        <p>
          The Fantasy Basketball API is an open-source project designed to provide developers with information on the best players from each team to help fantasy basketball enthusiasts find the best information possible. It allow users to get the top 3 scorers from each NBA team to aid in decisions on which fantasy players they would like to select. The API also stores relevant team data to throughly understand the stats of the players team in relation to their stats.
        </p>
      </main>
    )
  }
}

export default Main