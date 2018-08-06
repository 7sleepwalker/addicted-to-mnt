import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

class GalleryImage extends Component {
  componentDidMount() {
    if (!this.props.featured) {
      // const controller = new ScrollMagic.Controller();
      // const imageSelector = document.getElementById(`gallery-image__imgBox--id${this.props.id}`);
      // const Tween = TweenMax.to(imageSelector, 2, { x:0, y:0 });
      // const scene = new ScrollMagic.Scene({ triggerElement: `#gallery-image__trigger-${this.props.id}`, duration: 500 })
      //   .setTween(Tween)
      //   .addIndicators('ass')
      //   .addTo(controller);
    }
  }

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
          {/*{ !this.props.featured && <div id={`gallery-image__trigger-${this.props.id}`} > trigger </div> }*/}
          <div className='gallery-image__imgBox' id={`gallery-image__imgBox--id${this.props.id}`}>
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
