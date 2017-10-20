import React, { Component } from 'react';
import Image from '../../img/logo.svg';

class About extends Component {
  render() {
    return (
      <section>
        <div className='about'>
          <div className='about__close'> </div>
          <h2 className="about__title"> I like traveling and this is journal. </h2>
          <div className='about__page-number'> about </div>
          <img className="about__background" src={Image} alt='logo'/>
        </div>
      </section>

    );
  }
}

export default About;
