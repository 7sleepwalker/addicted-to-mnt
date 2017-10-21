import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom'

import GMap from '../Components/Map';
import Image from '../../img/cover1.png';

import Gallery from '../Containers/Gallery';

class HeroBanner extends Component {
  render() {

  //  const pos = {lat: 37.759703, lng: -122.428093}

    return (
      <div className="blog-post">
        <div className='blog-post__coverBox'>
          <div className="coverBox__link"> <Link to='/Gallery-Alps'>view gallery</Link> </div>
          <div className="coverBox__mirror" />
          <img className="coverBox__image" src={Image} alt='cover' />
        </div>
        <div className="blog-post__contentBox">
          <div className="blog-post__mapBox">
            <GMap />
          </div>
          <div className="blog-post__content">
            <h2 className="blog-post__title"> Week in Alps </h2>
            <div className="blog-post__date"> created at: <span> 15.10.2017 </span> <div> 13:23 GTM </div> </div>
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
            <div className='padding-box-large' />
            <div className="blog-post__timeLine">
              <div className="blog-post__stage">
                <div className="stage__bullet">  </div>
                <div className="stage__listBox">
                  <div className="stage__date"> 10.10 </div>
                  <div className="stage__place"> Neuschwanstein <span> 87645 Schwangau, Germany </span> </div>
                </div>
              </div>

              <div className="blog-post__stage">
                <div className="stage__bullet">  </div>
                <div className="stage__listBox">
                  <div className="stage__date"> 10.10 </div>
                  <div className="stage__place"> Neuschwanstein <span> 87645 Schwangau, Germany </span> </div>
                </div>
              </div>
            </div>

            <div className='blog-post__page-number'> <span>1</span>/<span>4</span> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroBanner;
