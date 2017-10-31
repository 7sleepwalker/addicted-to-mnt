import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DashboardSidebar extends Component {

  render() {

    let props = this.props;
    let navList = [];

    console.log("SIDEBAR");
    console.log(this.props.nav);

    function process(path) {
      navList.push(path);
      console.log(path);
    }

    function traverse(path = '', o, func) {
      let pathN = path;
      for (var i in o) {
        // print structure step by step
        func.apply(this,[pathN + '/' + i]);
        if (o[i] !== null && typeof(o[i]) === "object") {
          traverse(path, o[i], func);
        } else {
          // print only ending point of structure

        }
      }
    }

    traverse('', this.props.nav, process);

    // if (this.props.nav) {
    //   navList = this.props.nav.map((item, n) => {
    //     return <li key={n}> <Link to={`${props.match.url}/${item}`}> {item} </Link> </li>
    //   });
    // }

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
