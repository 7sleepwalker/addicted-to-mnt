import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostGalleryByID } from '../Actions/galleryActions';

import ReturnHome from '../Components/returnHome.js';
import GalleryImage from '../Components/GalleryImage';

class Gallery extends Component {
  componentWillMount() {
    this.props.dispatch(getPostGalleryByID(this.props.match.params.id));
  }

  render() {
    console.log(this.props);

    const gallery = this.props.gallery.gallery;
    let galleryRender;
    let day = null;
    let prevDay = -1;
    if ( gallery ) {
      galleryRender = gallery.map((item, n) => {
        let featured=false, right=false;
        if (n === 0) {
          featured = true;
          item.day = 'featured';
        }
        else if (n%2)
          right = true;
        if (prevDay !== item.day.toString())
          day = item.day.toString();
        else
          day = null;
        prevDay = item.day.toString();
        return <GalleryImage key={n} id={n} content={item} featured={featured} right={right} day={day}/>
      });
    }

    return (
      <div className='gallery'>
        <ReturnHome />
        {galleryRender}
        <div className='addictiv__page-number'> gallery </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gallery: state.gallery
  };
};

export default connect(mapStateToProps)(Gallery);
