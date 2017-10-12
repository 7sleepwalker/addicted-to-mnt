import React, { Component } from 'react';
import '../../styles/page_homepage.css';

import HeroBanner from '../Components/HeroBanner';

class HomePage extends Component {
  render() {
    return (
      <div className="addicted__homepage">
        <section>
          <HeroBanner />
        </section>
      </div>

    );
  }
}

export default HomePage;
