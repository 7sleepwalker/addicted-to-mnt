import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import GMap from '../Components/Map';
import Image from '../../img/cover1.png';

import MoutainSeparator from '../../img/moutain-separator.png';

class BlogPost extends Component {
  render() {
  let content = this.props.content;
  let createdAt = {
    day: content.createdAT.split(" ")[0],
    time: content.createdAT.split(" ")[1]
  }
  let tags = content.tags.map((item, n) => {
    return (
      <li key={n}> {item} </li>
    )
  });
  let stages = content.places.map((item, n) => {
    return (
      <div key={n} className="blog-post__stage">
        <div className="stage__bullet">  </div>
        <div className="stage__listBox">
          <div className="stage__date"> {item.date} </div>
          <div className="stage__place"> {item.title} <span> 87645 Schwangau, Germany </span> </div>
        </div>
      </div>
    )
  });

    return (
      <div className="blog-post" id={`BlogPost-${content.id}`}>
        {/*<img className="blog-post__separator" src={MoutainSeparator} alt="separator" />*/}
        <div className='blog-post__coverBox'>
          <div className="coverBox__link"> <Link to={`/BlogGallery/${content.id}`}>view gallery</Link> </div>
          <div className="coverBox__mirror" />
          <img className="coverBox__image" src={Image} alt='cover' />
        </div>
        <div className="blog-post__contentBox">
          <div className="blog-post__mapBox">
            <GMap mapID={`map-${content.id}`} places={content.places} />
          </div>
          <div className="blog-post__content">
            <h2 className="blog-post__title"> {content.title} </h2>
            <div className="blog-post__date"> created at: <span> {createdAt.day} </span> <div> {createdAt.time} </div> </div>
            <hr />
            <div className="blog-post__tags">
              <ul>
                {tags}
              </ul>
            </div>
            <div className='padding-box-large' />
            <div className="blog-post__timeLine">
              {stages}
            </div>
            <div className='blog-post__page-number'> <span>{this.props.postNumber+1}</span>/<span>{this.props.postsAmount}</span> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost ;
