import React, { Component } from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import BlogPost from '../Components/BlogPost';


class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <BlogPost />
      </div>
    );
  }
}

export default Blog;
