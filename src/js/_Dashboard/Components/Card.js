import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
		let cardRender;
		let cardBackground;
		if (this.props.addCard) {
			cardRender = (
				<a onClick={() => this.props.createPost()} >
					<i className="card__icon fas fa-plus" aria-hidden="true" />
					<div> {this.props.title} </div>
				</a>	);
		} else if (this.props.editCard) {
		 	cardRender = <div className="card__title"><a>	{this.props.title} </a></div>;
			cardBackground = (
				<div className="card__hover">
						<Link to={`${this.props.match.path}/${this.props.content.id}`}>
              <i className="card__icon fas fa-edit" aria-hidden="true" />
              <div> Edit </div>
            </Link>
						<a onClick={() => this.props.deletePost()} >
							<i className="card__icon fas fa-trash-alt" aria-hidden="true" />
							<div> Remove </div>
						</a>
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
