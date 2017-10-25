import React, { Component } from 'react';

class GalleryImage extends Component {
  render() {
    const content = this.props.content;
    let classNames = "gallery-image";
    let image = <img src={content.imgURL} alt={content.title} className="gallery-image__img" />;
    if (this.props.featured) {
      classNames="gallery-image gallery-image--featured";
      image = <div className="gallery-image__img"  style={{backgroundImage: `url(${content.imgURL})`}} />;
    }
    else if (this.props.right)
      classNames+=" gallery-image--right";
    else
      classNames+=" gallery-image--left";

    return (
      <div className={classNames}>
        <div>
          <div className="gallery-image__imgBox">
            <div className="gallery-image__title"> {content.title} </div>
            <div className="gallery-image__place"> {content.place.lat} </div>
            {image}
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryImage;
