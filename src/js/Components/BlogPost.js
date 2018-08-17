import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import GMap from '../Components/Map';
import Image from '../../img/cover1.png';
import { displayLocationElevation } from './Map/helpers/googleHandlers';

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
    const elevator = new window.google.maps.ElevationService;
    
    const createdAt = {
      day: content.createdAT.split(' ')[0],
      time: content.createdAT.split(' ')[1]
    };
    const tags = content.tags.split(',').map((item, n) => {
      return (
        <li key={n}> {item} </li>
      )
    });
    
    const stages = Array.isArray(content.places) ? content.places.map((item, n) => {
      return (
        <div key={n} className='blog-post__stage'>
          <div className='stage__bullet'>  </div>
          <div className='stage__listBox'>
            <div className='stage__date'> {item.date} </div>
            <div className='stage__title'> {item.title} <span> Attitude: 1523m</span> </div>
            <div className='stage__subtitle'> {item.subtitle} </div>
          </div>
        </div>
      )
    }): null;

    return (
      <div className='blog-post' id={`BlogPost-${content.id}`}>
        {/*<img className='blog-post__separator' src={MoutainSeparator} alt='separator' />*/}
        <Link to={`/BlogGallery/${content.id}`} className='blog-post__coverBox'>
          <div className='coverBox__link'> <div>view gallery</div></div>
          <div className='coverBox__mirror' style={{backgroundImage: coverImage}}/>
          <img className='coverBox__image' src={coverImage} alt='cover' />
        </Link>
        <div className='blog-post__contentBox'>
          <div className='addictiv-row blog-post__header'>
            <h2 className='blog-post__title'> {content.title} </h2>
            <div className='blog-post__date'> created at: <span> {createdAt.day} </span> <div> {createdAt.time} </div> </div>
          </div>
          {tags.length > 1 ? (
            <div className='addictiv-row'>
              <div className='blog-post__tags'>
                <ul>
                  {tags}
                </ul>
              </div>
            </div>
          ) : null
          }
          <div className='blog-post__mapBox'>
            <GMap mapID={`map-${content.id}`} places={content.places} getDistance={this.getDistance}/>
            {this.state.distance > 0 ?
              <div className='blog-post__distance'>Travel distance: <strong>{parseInt(this.state.distance)}km</strong></div>
              : null
            }
          </div>
          <div className='padding-box-small' />
          <div className='blog-post__content'>
            { content.postDescription ? (
              <div>
                <div className='blog-post__description'>
                  {content.postDescription}
                </div>
              </div>
              ) : null
            }
            { stages ? (
              <div className='blog-post__timeLine'>
                {stages}
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

export default BlogPost;
