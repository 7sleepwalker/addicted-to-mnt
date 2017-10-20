import React, { Component } from 'react';

class Nav extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      menuActive: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var obj  = {}
    obj['menuActive'] = !this.state.menuActive
    this.setState(obj);
  }

  render() {
    return (
      <div className={this.state.menuActive? 'nav active': 'nav'} >
        <div className='nav__button' onClick={this.handleClick}>
          <div className='nav__buttonPart' />
          <div className='nav__buttonPart' />
          <div className='nav__buttonPart' />
        </div>
        <div className='nav__menuBox'>
          <ul className='nav__menu'>
            <li className='nav__menuItem'> home </li>
            <li className='nav__menuItem'> blog </li>
            <li className='nav__menuItem'> about </li>
          </ul>
        </div>
        <div className="nav__background" />
        <div className="nav__shadowBackground" />
      </div>
    );
  }
}

export default Nav;
