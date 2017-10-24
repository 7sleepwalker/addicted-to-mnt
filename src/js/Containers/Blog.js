import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlogPost from '../Components/BlogPost';
import { getPosts } from '../Actions/postActions';

class Blog extends Component {

  componentWillMount() {
    this.props.dispatch(getPosts());
  }

  render() {
    let posts = this.props.posts.posts;
    let postRender;

    if (posts.length > 0) {
      postRender = posts.map((item, n) => {
        return <BlogPost key={n} content={item} postNumber={n} postsAmount={posts.length}/>
      });
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

// Gallery.propTypes = {
//   completed: PropTypes.bool.isRequired,
//   content: PropTypes.string.isRequired
// }

export default connect(mapStateToProps)(Blog);
