import React from 'react';

const Nav = ({ changePage }) => {
  return (
    <nav>
      <ul> 
        <h4>API ENDPOINTS</h4>
        <li id="page-get" onClick={() => changePage("get")}>GET</li>
        <li id="page-post" onClick={() => changePage("post")}>POST</li>
        <li id="page-patch" onClick={() => changePage("patch")}>PATCH</li>
        <li id="page-delete" onClick={() => changePage("delete")}>DELETE</li>
      </ul>
      <h4>MORE INFO</h4>
      <h4 id="page-overview" onClick={() => changePage("overview")}>OVERVIEW</h4>
    </nav>
  )
}

export default Nav