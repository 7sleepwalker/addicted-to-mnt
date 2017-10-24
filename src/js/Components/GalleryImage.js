import React, { Component } from 'react';

class GalleryImage extends Component {
  render() {
    const content = this.props.content;
    console.log(content);
    return (
      <div className="gallery-image">
        <div className="gallery-image__title"> {content.title} </div>
        <div className="gallery-image__place"> {content.place.lat} </div>
        <img className="gallery-image__img" alt="Nice" src={content.imgURL} />
      </div>
    );
  }
}

export default GalleryImage;
