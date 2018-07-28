import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostGalleryByID } from '../Actions/galleryActions';
import LogoBG from '../../img/logo.svg';
import { Link } from 'react-router-dom';

import ReturnHome from '../Components/returnHome.js';
import GalleryImage from '../Components/GalleryImage';

class Gallery extends Component {
  componentWillMount() {
    this.props.dispatch(getPostGalleryByID(this.props.match.params.id));
  }

  render() {

    const gallery = this.props.gallery.gallery;
    let galleryRender;
    let day = null;
    let prevDay = -1;
    if ( gallery ) {
      galleryRender = gallery.map((item, n) => {
        console.log(typeof parseInt(item.day), typeof prevDay);
        let featured=false, right=false;
        if (n === 0)
          featured = true;
        else if (n%2)
          right = true;
        if (prevDay !== parseInt(item.day))
          day = parseInt(item.day);
        else
          day = null;
        prevDay = parseInt(item.day);
        return <GalleryImage key={n} content={item} featured={featured} right={right} day={day}/>
      });
    }

    return (
      <div className='gallery'>
        <ReturnHome />
        {galleryRender}
        <div className='addictiv__page-number'> gallery </div>
        <img className="addictiv__background" src={LogoBG} alt='logo'/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gallery: state.gallery
  };
}

export default connect(mapStateToProps)(Gallery);
