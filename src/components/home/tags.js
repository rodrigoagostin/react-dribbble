import React from 'react';
import Tag from './tag';

const Tags = ({tags}) => {
  return(
    <div className="tags-description">
      <ul className="list-style list-inline">
        {tags.map((tag) => {
          return <Tag tag={tag} key={tag} />
        })}
      </ul>
    </div>
  )
}

export default Tags;
