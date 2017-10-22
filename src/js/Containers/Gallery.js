import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { voteReact, voteAngular, voteVuejs } from '../Actions';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
    console.log(this.store.getState());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
    console.log(this.props);
  }

  render() {
   let content = this.props.content;
    return (
      <div className='gallery'>
        <p>Page id: {this.props.match.params.id}</p>
        {JSON.stringify({ content })}

        <button onClick={this.handleVoteReact}> React </button>
        <button onClick={this.handleVoteAngular}> Angular </button>
        <button onClick={this.handleVoteVuejs}> Vue </button>
      </div>
    );
  }
}


// Gallery.propTypes = {
//   completed: PropTypes.bool.isRequired,
//   content: PropTypes.string.isRequired
// }

export default Gallery;
