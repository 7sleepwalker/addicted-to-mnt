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
    console.log("SIJ" + gallery);
    let galleryRender;
    if ( gallery ) {
      galleryRender = gallery.map((item, n) => {
        return <GalleryImage key={n} content={item} />
      });
    }

    return (
      <div className='gallery'>
        <div>{JSON.stringify(this.props.gallery.gallery)}</div>
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

// Gallery.propTypes = {
//   completed: PropTypes.bool.isRequired,
//   content: PropTypes.string.isRequired
// }

export default connect(mapStateToProps)(Gallery);
