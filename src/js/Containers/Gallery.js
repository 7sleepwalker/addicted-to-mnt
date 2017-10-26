import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostGalleryByID } from '../Actions/galleryActions';
import LogoBG from '../../img/logo.svg';
import { Link } from 'react-router-dom';

import GalleryImage from '../Components/GalleryImage';

class Gallery extends Component {
  componentWillMount() {
    this.props.dispatch(getPostGalleryByID(this.props.match.params.id));
  }

  render() {

    let gallery = this.props.gallery.gallery;
    let galleryRender;
    let day=0;
    if ( gallery ) {
      galleryRender = gallery.map((item, n) => {
        let featured=false, right=false, day=null;
        if (n === 0)
          featured = true;
        else if (n%2)
          right = true;
        if (item.day)
          day = item.day;
        return <GalleryImage key={n} content={item} featured={featured} right={right} day={day}/>
      });
    }

    return (
      <div className='gallery'>
        <Link to='/'><div className='addictiv__close'> </div></Link>
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
