import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostByID, voteAngular, voteReact, voteVuejs } from '../Actions/postActions';

class Gallery extends Component {
  componentWillMount() {
    this.props.dispatch(getPostByID());
  }

  handleVoteAngular = () => {
    this.props.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.props.dispatch(voteReact());
    console.log(this.store.getState());
  }

  handleVoteVuejs = () => {
    this.props.dispatch(voteVuejs());
    console.log(this.props);
  }

  handlePostRequest = () => {
     this.props.dispatch(getPostByID());
  }

  render() {
    return (
      <div className='gallery'>
        <p>Page id: {this.props.match.params.id}</p>
        <div>{JSON.stringify(this.props.posts.posts)}</div>
        <div>
        <button onClick={this.handleVoteReact}> React </button>
        <button onClick={this.handleVoteAngular}> Angular </button>
        <button onClick={this.handleVoteVuejs}> Vue </button>
        </div>
        <div>
          <button onClick={this.handlePostRequest}> Get post? </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post
  };
}

// Gallery.propTypes = {
//   completed: PropTypes.bool.isRequired,
//   content: PropTypes.string.isRequired
// }

export default connect(mapStateToProps)(Gallery);
