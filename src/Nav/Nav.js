import React from 'react';

const Nav = ({ changePage }) => {
  return (
    <nav>
      <ul> 
        <h4 className="overview" onClick={() => changePage("overview")}>OVERVIEW</h4>
        <h4 className="endpoints">API ENDPOINTS</h4>
        <li className="link" onClick={() => changePage("get")}>GET</li>
        <li className="link" onClick={() => changePage("post")}>POST</li>
        <li className="link" onClick={() => changePage("patch")}>PATCH</li>
        <li className="link" onClick={() => changePage("delete")}>DELETE</li>
      </ul>
    </nav>
  )
}

export default Nav