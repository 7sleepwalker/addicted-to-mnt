import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

class GalleryImage extends Component {
  render() {
    const content = this.props.content;
    let classNames = 'gallery-image';
    let image = (<img src={content.imgURL} alt={content.title} className='gallery-image__img' />);

    if (this.props.featured) {
      classNames='gallery-image gallery-image--featured';
      image = <Parallax bgImage={content.imgURL} className='gallery-image__img' blur={{min: -10,max:10}} />;
    }
    else if (this.props.right)
      classNames+=' gallery-image--right';
    else
      classNames+=' gallery-image--left';

    return (
      <div className={classNames}>
      {this.props.day ? <div id={`gallery-image__${this.props.day}`} className='gallery-image__separator'> Day {this.props.day} </div> : null}
        <div>
          <div className='gallery-image__imgBox'>
            <div className='gallery-image__title'> {content.title} </div>
            <div className='gallery-image__place'>
              <a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${content.gcords.lat},${content.gcords.lng}`}> Check out on google</a>
            </div>
            {image}
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryImage;
