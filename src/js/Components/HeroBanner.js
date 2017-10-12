import React, { Component } from 'react';
import '../../styles/object_herobanner.css';

import logo from '../../img/logo.svg';

class HeroBanner extends Component {
  render() {
    return (
      <div className='hero-banner'>

        <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" className='hero-banner__background' playsInline autoPlay muted loop>
          <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm" />
          <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4" />
        </video>

        <div className='hero-banner__content'>
          <img src={logo} className='hero-banner__logo' alt='Addicted to moutains logo' />
        </div>

      </div>
    );
  }
}

export default HeroBanner;
