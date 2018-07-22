import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BlogPost from '../Components/BlogPost';
import { getPosts } from '../Actions/postActions';

class Blog extends Component {

  componentWillMount() {
    this.props.dispatch(getPosts());
  }

  render() {
    let posts = this.props.posts.posts;
    let postRender;

    if (posts && posts.length > 0) {
      postRender = posts.map((item, n) => (
        <BlogPost key={n} content={item} postNumber={n} postsAmount={posts.length}/>
      ));
    }
    return (
      <div className="blog">
        {postRender}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    posts: store.posts
  };
}

Blog.props = {
  posts: PropTypes.shape({
      error: PropTypes.string,
      fetched: PropTypes.bool,
      fetching: PropTypes.bool,
      posts: PropTypes.object.isRequired
    })
}

export default connect(mapStateToProps)(Blog);
