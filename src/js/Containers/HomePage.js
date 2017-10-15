import React, { Component } from 'react';
import '../../styles/page_homepage.css';

import HeroBanner from '../Components/HeroBanner';
import Nav from '../Components/Nav';
import Blog from './Blog';

class HomePage extends Component {
  render() {
    return (
      <div className="addicted__homepage">
        <Nav menuList={Object.keys(this.props.content)}/>
        <section>
          <HeroBanner />
        </section>
        <section>
          <Blog />
        </section>
      </div>

    );
  }
}

export default HomePage;
