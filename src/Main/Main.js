import React from 'react';

const Main = ({ activePage }) => {
  if (activePage === 'overview') {
    return(
      <main>
        <h2>OVERVIEW</h2>
        <p>
          The Fantasy Basketball API is an open-source project designed to provide developers with information on the best players from each team to help fantasy basketball enthusiasts find the best information possible. It allow users to get the top 3 scorers from each NBA team to aid in decisions on which fantasy players they would like to select. The API also stores relevant team data to thoroughly understand the stats of the players team in relation to their stats.
        </p>
      </main>
    )
  }
  if (activePage === 'get') {
    return (
      <div>
        <h2>GET all teams:</h2>
        <h3>GET /api/v1/teams</h3>
        <p>Receive an array of NBA teams with relevant stats.</p> 
        
        <p>Sample Response:</p>
      
        <img src="../images/Screen Shot 2019-02-05 at 3.29.49 PM.png"></img>
          
      
        <h2>GET all players:</h2>
        <h3>GET /api/v1/players</h3>
        <p>Receive an arry of the top 3 scoring leaders from each team with additional stats.</p> 
        
        <p>Sample Response:</p>

        <img src="../images/Screen Shot 2019-02-05 at 3.30.12 PM.png"></img>
        

        <h2>GET a single team:</h2>
        <h3>GET /api/v1/teams/:id</h3>
        <p>Receive a single team object with stats.</p>
        
        <p>Sample Response:</p>

        <img src="../images/Screen Shot 2019-02-05 at 3.30.27 PM.png"></img>

        <h2>GET a single player:</h2>
        <h3>GET /api/v1/players/:id</h3>
        <p>Receive a single player object with all stats.</p>
        
        <p>Sample Response:</p>

        <img src="../images/Screen Shot 2019-02-05 at 3.30.40 PM.png"></img>
      
      </div>
    )
  }
  if (activePage === 'post') {
    return (
      <div>
        <h2>POST a new team:</h2>
        <h3>POST /api/v1/teams</h3>
        <p>Request should include a complete team with all necessary properties.</p>
        <p>Sample Request:</p>
        
        <img src="../images/Screen Shot 2019-02-05 at 3.30.55 PM.png"></img>

        <p>Receive the id of the new entry.</p>
        <p>Sample response</p>
        
        <img src="../images/Screen Shot 2019-02-05 at 3.31.16 PM.png"></img>

        <h3>Post a new player:</h3>
        <h2>POST /api/v1/players</h2>
        <p>Request should include a complete player object with all necessary properties.</p>
        <p>Sample Request:</p>

        <img src="../images/Screen Shot 2019-02-05 at 3.31.28 PM.png"></img>
      </div>
    )
  }
  if (activePage === 'patch') {
    return (
      <div>
        <h3>PATCH an existing team:</h3>
        <h2>PATCH /api/v1/teams/:id</h2>
        <p>Request should include any key/value pairs that are to be changed in the database.</p>
        <p>Sample request body:</p>

        <img src="../images/Screen Shot 2019-02-05 at 3.31.43 PM.png"></img>

        <p>Receive the id of the record that was updated and a confirmation message.</p>
        <p>Sample response:</p>

        <img src="../images/Screen Shot 2019-02-05 at 3.50.15 PM.png"></img>

        <h3>PATCH an existing player:</h3>
        <h2>PATCH /api/v1/players/:id</h2>
        <p>Request should include any key/value pairs that are to be changed on the database.</p>
        <p>Sample request body:</p>

        <img src="../images/Screen Shot 2019-02-05 at 3.31.57 PM.png"></img>

        <p>Receive the id of the record that was updated and a confirmation message</p>
        <p>Sample response:</p>

        <img src="../images/Screen Shot 2019-02-05 at 3.32.10 PM.png"></img>
      </div>
    )
  }
  if (activePage === 'delete') {
    return (
      <div>
        <h3>DELETE an existing team:</h3>
        <h2>DELETE /api/v1/teams/:id</h2>
        <p>Receive a confirmation message or the record that was deleted.</p>
        <p>Sample response:</p>

        <img src="../images/Screen Shot 2019-02-05 at 3.32.24 PM.png"></img>
        
        <h3>DELETE an existing player:</h3>
        <h2>DELETE /api/v1/players/:id</h2>
        <p>Receive a confirmation message or the record that was deleted.</p>
        <p>Sample response:</p>

        <img src="../images/Screen Shot 2019-02-05 at 3.32.35 PM.png"></img>
      </div>
    )
  }
}

export default Main