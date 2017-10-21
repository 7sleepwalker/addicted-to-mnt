import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Gallery extends Component {
  render() {

    return (
      <div className='gallery'>
        <p>Page id: {this.props.match.params.id}</p>
        {this.props.content}
      </div>
    );
  }
}


Gallery.propTypes = {
  completed: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired
}

export default Gallery;
