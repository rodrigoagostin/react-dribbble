import React from 'react';
import UserLinks from './user_links';

const UserProfile = ({avatar, name, bio, links}) => {
  return(
    <div className="user-profile">
      <img src={avatar} className="img-circle" />
      <h4>{name}</h4>
      <p dangerouslySetInnerHTML={{__html: bio}}></p>
      <UserLinks links={links} />
    </div>
  )
}

export default UserProfile;
