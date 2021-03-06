import React, { Component } from 'react';

import HeroBanner from '../Components/HeroBanner';
import Nav from '../Components/Nav';
import Blog from './Blog';

class HomePage extends Component {
  render() {
    return (
      <div className="addicted__homepage">
        <Nav menuList={ this.props.content ? Object.keys(this.props.content) : null}/>
        <HeroBanner />
        <Blog />
      </div>

    );
  }
}

export default HomePage;
