import React, { Component } from 'react';


import { connect } from 'react-redux';
import { logIn } from '../Actions/dashboardActions';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn(e) {
    e.preventDefault();
    this.props.dispatch(logIn("boorish92@gmail.com", "Asdfgh"));
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps)

  }

  render() {
    return (
      <section className="dashboard__logIn">
        <div className="container">
          <div className="login-container">
            <div id="output"></div>
            <div className="avatar"></div>
            <div className="form-box">
              <form onSubmit={this.handleLogIn} method="">
                <input name="user" type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button className="btn btn-info btn-block login" type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.dashboard
  };
}

export default connect(mapStateToProps)(LogIn);
