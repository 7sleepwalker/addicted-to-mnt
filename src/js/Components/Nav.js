import React, { Component } from 'react';
import '../../styles/object_nav.css';


class Nav extends Component {
  render() {

    // const menuList = this.props.menuList.map((item, x) => {
    //   console.log(item);
    //   return(
    //     <li key={x}> {item} </li>
    //   )
    // });

    return (
      <div className='nav'>
        <div className='nav__button'>
          <div className='nav__buttonPart' />
          <div className='nav__buttonPart' />
          <div className='nav__buttonPart' />
        </div>
        <div className='nav__menuBox'>
          <ul className='nav__menu'>
            <li> Home </li>
            <li> Blog </li>
            <li> About </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Nav;
