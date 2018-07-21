import React, { Component } from 'react';
import { Route, Switch, withRouter  } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { getStructure } from '../Actions/dashboardActions';

import DashboardSidebar from './DashboardSidebar';
import DashboardHome from './DashboardHome';
import DashboardContent from './DashboardContent';


class DashboardPanel extends Component {

  componentWillMount() {
    this.props.dispatch(getStructure());
  }

  componentDidMount() {

  }

  render() {
    if (!this.props.nav)
      return (<div className='addictiv_isLoading'> Content is loading </div>);

    console.log('RENDER PANEL');
    function process(path) {
      navKeys.push(path);
    }

    function traverse(path = '', o, func) {
      for (var i in o) {
    		func.apply(this,[path + '/' + i]);
        let object = o[i];
        if (object !== null && typeof(object) === 'object' && !object.structure) {
    			path +=  '/' + i;
        	traverse(path, o[i], func);
        }
      }
    }

    let props = this.props;
    let routes = [];
    let idRoutes = [];
    let navKeys = [];
    let sidebarNav = [];
    traverse('', props.nav, process);
    if (navKeys.length > 0) {
      sidebarNav = Object.keys(props.nav);
      routes = navKeys.map((item, n) => {
        let nodeName = item.replace('/', '');
        if (typeof(props.nav[nodeName]) === 'object')
          nodeName = props.nav[nodeName];
        else {
          let array = nodeName.split('/');
          nodeName = props.nav;
          for(let i in array) {
            nodeName = nodeName[array[i]];
          }
        }

        if (nodeName.structure === 'list') {
          idRoutes.push(<Route key={n} path={`/dashboard/panel${item}/:id`} exact render={(props) => <DashboardContent match={props.match} childNodes={nodeName} /> } />);
        }
        return <Route key={n} path={`/dashboard/panel${item}`} exact render={(props) => <DashboardContent match={props.match} childNodes={nodeName} /> } />;
      });
    }

    for (let i in idRoutes){
      routes.push(idRoutes[i]);
    }

    return (
      <section className='dashboard__panel'>
      <Route render={(props) => <DashboardSidebar match={props.match} nav={sidebarNav} /> } />
        <Route exact path='/dashboard/panel' component={DashboardHome} />
        <Switch>
          {routes}
        </Switch>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.sidebar.nav
  };
}

DashboardPanel.contextTypes = {
  router: propTypes.object,
  store: propTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps)(DashboardPanel));
