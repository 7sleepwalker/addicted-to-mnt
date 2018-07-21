import React, { Component } from 'react';

import TextInput from './DashboardTextInput';
import MapInput from './DashboardMapInput';

class DashboardGallery extends Component {
  constructor(props) {
    super(props);
    this.imageID = 0;
    this.state = {
      images: {}
    };

    this._getInputData = this._getInputData.bind(this);
    this._addNewItem = this._addNewItem.bind(this);
    this._removeItem = this._removeItem.bind(this);
	}

  _getInputData(data, id, type) {
      const newInputs = this.state.images.map((image) => {
        if (image.id !== id) return image;
        return { ...image, [type]: data };
      });
      this.setState({images: newInputs});
  }

  _addNewItem() {
    this.setState({
      images: [
        ...this.state.images,
        {
          day: 0,
          imgURL: 'URL',
          title: 'Title',
          gcords: { lat: 0, lng: 0 },
          id: this.imageID++
        }
      ]
    });
  }

  _removeItem(index) {
    const tmparray = this.state.images;
    tmparray.splice(index, 1);
    this.setState({
      images: tmparray
    })
  }

    componentDidMount() {
      if (this.props.content !== 'empty' && typeof this.props.content !== 'undefined' && this.props.content.hasOwnProperty('0')) {
        this.setState({
          images: this.props.content.map((item) => (
            {...item, id: this.imageID++}
          ))
        });
      }
    }

    componentDidUpdate() {
        if (this.props.submit) {
            this.props.submitData(Object.assign({}, this.state.images), 'gallery');
        }
    }


  render() {
    const { structure } = this.props;
    let images = [];

    if (this.state.images.length > 0) {
      this.state.images.forEach((data, i) => {
        images.push(
          <div className="card-list__box gallery-items__box" key={data.id}>
            <div className="card-list__closer" onClick={() => { this._removeItem(i) }}><i className="fa fa-times-circle"/></div>
            <TextInput id={data.id} type={'day'} description={structure.day.description} value={data.day}
                       inputHandler={this._getInputData}/>
            <TextInput id={data.id} type={'imgURL'} description={structure.imgURL.description}
                       value={data.imgURL} inputHandler={this._getInputData}/>
            <TextInput id={data.id} type={'title'} description={structure.title.description}
                       value={data.title} inputHandler={this._getInputData}/>
            <MapInput id={data.id} type={'gcords'} description={structure.gcords.description}
                      gcords={data.gcords} inputHandler={this._getInputData}/>
          </div>
        );
      });
    }
    
    return (
      <div className="gallery-items card-list">
        {images}
        <div className="card-list__box gallery-items__box gallery-items__box--new" onClick={this._addNewItem} key={-1}>
          Add new image
        </div>
      </div>
    );
  }
}

export default DashboardGallery;
