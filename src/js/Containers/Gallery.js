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
    if ( gallery ) {
      galleryRender = gallery.map((item, n) => {
        if (n === 0)
          return <GalleryImage key={n} content={item} featured={true} />
        else if (n%2) {
          return <GalleryImage key={n} content={item} right={true} />
        }
        return <GalleryImage key={n} content={item} />
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
