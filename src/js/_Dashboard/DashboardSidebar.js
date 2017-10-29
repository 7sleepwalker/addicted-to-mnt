import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DashboardSidebar extends Component {

  render() {

    let props = this.props;
    let navList;
    console.log(this.props.nav);
    if (this.props.nav) {
      navList = this.props.nav.map((item, n) => {
        return <li key={n}> <Link to={`${props.match.url}/${item}`}> {item} </Link> </li>
      });
    }

    return (
      <aside className="dashboard__sideBar">
        <h2 className="sideBar__title"> Dashboard </h2>
        <hr className="sideBar__separator" />
        <ul>
          <li> <Link to={`${props.match.url}`}> main panel </Link> </li>
          {navList}
        </ul>
      </aside>
    );
  }
}

export default DashboardSidebar;
