import React, { Component } from 'react';

import '../../styles/page_blog.css';

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <div className="blog-post">
          <div className='blog-post__cover'>

          </div>
          <div className="blog-post__contentBox">
            <div className="blog-post__mapBox">

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
