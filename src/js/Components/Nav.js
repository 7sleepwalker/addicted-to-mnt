import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

class Nav extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      menuActive: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var obj  = {};
    obj['menuActive'] = !this.state.menuActive;
    this.setState(obj);
  }

  render() {
    return (
      <div className={this.state.menuActive? 'nav active': 'nav'} >
        <div className='nav__button' onClick={this.handleClick}>
          <div className='nav__buttonPart' />
          <div className='nav__buttonPart' />
          <div className='nav__buttonPart' />
          <div className="nav__buttonTitle"> {this.state.menuActive? <div>Close</div> : <div>Menu</div>} </div>
        </div>
        <div className='nav__menuBox'>
          <ul className='nav__menu'>
            <li className='nav__menuItem'> <Link to='/'> home  </Link> </li>
            <li className='nav__menuItem'> <Link to='/'> blog </Link> </li>
            <li className='nav__menuItem'> <Link to='/About'> about </Link> </li>
          </ul>
        </div>
        <CSSTransition
          in={this.state.menuActive}
          timeout={300}
          classNames="nav__background"
        >
          <div className="nav__background"/>
        </CSSTransition>
        <CSSTransition
          in={this.state.menuActive}
          timeout={300}
          classNames="nav__shadowBackground"
        >
          <div className="nav__shadowBackground"/>
        </CSSTransition>
      </div>
    );
  }
}

export default Nav;
