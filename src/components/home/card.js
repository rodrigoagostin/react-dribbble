import React, { Component } from 'react';
import CardCaption from './card_caption';
import CardDescription from './card_description';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: false,
      dribbble: this.props.dribbble
    };
  }

  render() {
    let cardLink = `/${this.state.dribbble.id}`;
    return(
      <div className="col-sm-6 col-md-4">
        <a href={cardLink}>
          <div className="thumbnail" >
            <img src={this.state.dribbble.images.normal} />
            <CardCaption
              title={this.state.dribbble.title}
              name={this.state.dribbble.user.name}
              tags={this.state.dribbble.tags}
              userImage={this.state.dribbble.user.avatar_url}
              views={this.state.dribbble.views_count}
            />
          </div>
        </a>
      </div>
    )
  }
}

export default Card;
