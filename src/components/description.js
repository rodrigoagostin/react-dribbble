import React, { Component } from 'react';
import HeaderText from './common/header_text';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import BackButton from './description/back_button';
import UserContext from './description/user_context';
import UserProfile from './description/user_profile';

class Description extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      id: this.props.params.id,
      dribbble : {
        title: '',
        images : {
          hidpi: '',
          normal: ''
        },
        user: {
          avatar_url: '',
          name: '',
          bio: '',
          links: {
            web: '',
            twitter: ''
          }
        }
      },
      isLoaded: 'none',
      isLoading: 'block'
    };
  }

  componentWillMount() {
    this.props.findDribbbleShotById(this.state.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dribbble) {
      this.setState({ dribbble : nextProps.dribbble, isLoaded : 'block', isLoading: 'none' });
    }
  }

  render() {
    return(
      <div>
        <div style={{ display : `${this.state.isLoading}` }}>Loading...</div>
        <div className="container" style={{display : `${this.state.isLoaded}`}}>
          <HeaderText text={this.state.dribbble.title} />
          <BackButton />
          <div className="description-row row">
            <UserContext hidpi={this.state.dribbble.images.hidpi} normal={this.state.dribbble.images.normal}
              description={this.state.dribbble.description} />
            <div className="col-md-3 text-center">
              <UserProfile avatar={this.state.dribbble.user.avatar_url}
                name={this.state.dribbble.user.name} bio={this.state.dribbble.user.bio}
                links={this.state.dribbble.user.links} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { dribbble : state.dribbbles[0] };
}

export default connect(mapStateToProps, actions)(Description);
