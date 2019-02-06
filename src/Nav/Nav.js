import React from 'react';

const Nav = ({ changePage }) => {
  return (
    <nav>
      <ul> 
        <h4 id="page-overview" onClick={() => changePage("overview")}>OVERVIEW</h4>
        <h4>API ENDPOINTS</h4>
        <li className="link" id="page-get" onClick={() => changePage("get")}>GET</li>
        <li className="link" id="page-post" onClick={() => changePage("post")}>POST</li>
        <li className="link" id="page-patch" onClick={() => changePage("patch")}>PATCH</li>
        <li className="link" id="page-delete" onClick={() => changePage("delete")}>DELETE</li>
      </ul>
    </nav>
  )
}

export default Nav