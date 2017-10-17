import React, { Component } from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import GMap from '../Components/Map';
import Marker from '../Components/Marker';


import '../../styles/page_blog.css';

class Blog extends Component {
  render() {

    const pos = {lat: 37.759703, lng: -122.428093}

    return (
      <div className="blog">
        <div className="blog-post">
          <div className='blog-post__coverBox'>
            <img src='https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?w=940&h=650' alt='cover' />
          </div>
          <div className="blog-post__contentBox">
            <div className="blog-post__mapBox">
              <GMap google={this.props.google} >
                <Marker />
                <Marker position={pos} />
              </GMap>
            </div>
            <div className="blog-post__content">
              <h2 className="blog-post__title"> Week in Alps </h2>
              <div className="blog-post__date"> created at: <span> 15.10.2017 </span> </div>
              <hr />
              <div className="blog-post__tags">
                <ul>
                  <li> hiking </li>
                  <li> train </li>
                  <li> duo </li>
                  <li> high-moutains </li>
                  <li> autumn </li>
                </ul>
              </div>
              <div className="blog-post__timeLine">
                <div className="blog-post__stage">
                  <div className="blog-post__stage-date"> 10.10 </div>
                  <div className="blog-post__stage-place"> Neuschwanstein </div>
                </div>
              </div>

              <div className='blog-post__page-number'> 1/4 </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
