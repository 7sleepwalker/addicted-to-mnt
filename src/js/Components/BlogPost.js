import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import GMap from '../Components/Map';
import Image from '../../img/cover1.png';
// import MoutainSeparator from '../../img/moutain-separator.png';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0
    };
    this.getDistance = this.getDistance.bind(this);
  }

  getDistance(dis) {
    this.setState({distance: dis});
  }

  render() {
    const content = this.props.content;

    const coverImage = content.cover ? content.cover : Image;

    const createdAt = {
      day: content.createdAT.split(' ')[0],
      time: content.createdAT.split(' ')[1]
    };
    const tags = content.tags.split(',').map((item, n) => {
      return (
        <li key={n}> {item} </li>
      )
    });

    console.log('tags', tags);

    const stages = content.places.map((item, n) => {
      return (
        <div key={n} className='blog-post__stage'>
          <div className='stage__bullet'>  </div>
          <div className='stage__listBox'>
            <div className='stage__date'> {item.date} </div>
            <div className='stage__place'> {item.title} <span> {item.subtitle} </span> </div>
          </div>
        </div>
      )
    });

    console.log(content.postDescription);

    return (
      <div className='blog-post' id={`BlogPost-${content.id}`}>
        {/*<img className='blog-post__separator' src={MoutainSeparator} alt='separator' />*/}
        <Link to={`/BlogGallery/${content.id}`} className='blog-post__coverBox'>
          <div className='coverBox__link'> <div>view gallery</div></div>
          <div className='coverBox__mirror' style={{backgroundImage: coverImage}}/>
          <img className='coverBox__image' src={coverImage} alt='cover' />
        </Link>
        <div className='blog-post__contentBox'>
          <div className='blog-post__mapBox'>
            <GMap mapID={`map-${content.id}`} places={content.places} getDistance={this.getDistance}/>
          </div>
          <div className='blog-post__content'>
            <h2 className='blog-post__title'> {content.title} </h2>
            <div className='blog-post__date'> created at: <span> {createdAt.day} </span> <div> {createdAt.time} </div> </div>
            <hr />
            {tags.length > 1 ? (
              <div>
                <div className='padding-box-large'/>
                <div className='blog-post__tags'>
                  <ul>
                    {tags}
                  </ul>
                </div>
              </div>
              ) : null
            }
            { content.postDescription ? (
              <div>
                <div className='padding-box-large' />
                <div className='blog-post__description'>
                  {content.postDescription}
                </div>
              </div>
              ) : null
            }
            {stages ? (
              <div>
                <div className='padding-box-large' />
                <div className='blog-post__timeLine'>
                  {stages}
                </div>
              </div>
              ) : null
            }
            <div className='blog-post__page-number'> <span>{this.props.postNumber+1}</span><span>/{this.props.postsAmount}</span> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost ;
