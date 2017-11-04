import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Wrapper = (props) => (
  <div>
    before
    {props.children}
    after
  </div>
)

class DashboardSidebar extends Component {

  render() {

    console.log("RENDER SIDEBAR");
    let props = this.props;
    let navList = [];

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
