import React from 'react';

const Tag = ({tag}) => {
  return(
    <li className="tag">{'#'+tag}</li>
  )
}

export default Tag;
