import React from 'react';

const UserLinks = ({links}) => {
  return(
    <div className="user-links">
      <ul className="list-unstyled list-inline">
        {links.twitter ? <li><a href={links.twitter} target="_blank">Twitter</a></li> : null}
        {links.web ? <li><a href={links.web} target="_blank">Web</a></li> : null}
      </ul>
    </div>
  )
}

export default UserLinks;
