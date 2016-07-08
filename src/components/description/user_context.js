import React from 'react';

const UserContext = ({hidpi, normal, description}) => {
  return(
    <div className="user-context">
      <div className="image-hidpi col-md-9">
        <img src={hidpi ? hidpi : normal} className="img-rounded" />
        <div className="content" dangerouslySetInnerHTML={{__html: description}}></div>
      </div>
    </div>
  )
}

export default UserContext;
