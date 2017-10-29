import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {

    console.log(this.props);
    return (
      <figure className="dashboard__card">
        <div className="card__title"> <Link to={`${this.props.match.url}/${this.props.title}`}> {this.props.title} </Link> </div>
      </figure>
    );
  }
}

export default Card;
