import React from 'react';
import Tags from './tags';

const CardDescription = ({name, tags, userImage}) => {
  return(
    <div className="description text-center">
      <img src={userImage} className="img-circle" />
      <span>{name}</span>
      { tags.length > 0 ? <Tags tags={tags} /> : null }
    </div>
  )
}

export default CardDescription;
