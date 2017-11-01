import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
		let cardRender;
		let cardBackground;
		if (this.props.addCard) {
			cardRender = (
				<a>
					<span className="card__icon glyphicon glyphicon-plus" aria-hidden="true"></span>
					<div> {this.props.title} </div>
				</a>	);
		} else if (this.props.editCard) {
		 	cardRender = <div className="card__title"><a>	{this.props.title} </a></div> ;
			cardBackground = (
				<div className="card__hover">
						<a><span className="card__icon glyphicon glyphicon-edit" aria-hidden="true"></span><div> Edit </div></a>
						<a><span className="card__icon glyphicon glyphicon-remove-circle" aria-hidden="true"></span><div> Remove </div></a>
				</div>
			);
		 } else {
			 cardRender = (
         <div className="card__title">
          <Link to={`${this.props.match.url}/${this.props.title}`}>
            {this.props.title}
          </Link>
        </div> );
		 }


    // <Link to={`${this.props.match.url}/${this.props.title}`}> {this.props.title} </Link>


    return (
      <figure className="dashboard__card">
				<div className="card__content">
					{cardRender}
				</div>
				{cardBackground}
      </figure>
    );
  }
}

export default Card;
