import React from 'react';
import CardDescription from './card_description';

const CardCaption = ({title, name, tags, userImage, views}) => {
  return(
    <div className="caption">
      <div className="row">
        <h3>{title}</h3>
        <span><i className="glyphicon glyphicon-eye-open"></i>{views}</span>
      </div>
      <CardDescription name={name} tags={tags} userImage={userImage}  />
    </div>
  )
}

export default CardCaption;
