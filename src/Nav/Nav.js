import React from 'react';

const Nav = ({ changePage }) => {
  return (
    <nav>
      <ul> 
        <h4>API ENDPOINTS</h4>
        <li onClick={() => changePage("get")}>GET</li>
        <li onClick={() => changePage("post")}>POST</li>
        <li onClick={() => changePage("patch")}>PATCH</li>
        <li onClick={() => changePage("delete")}>DELETE</li>
      </ul>
      <h4>MORE INFO</h4>
      <h4 onClick={() => changePage("overview")}>OVERVIEW</h4>
    </nav>
  )
}

export default Nav